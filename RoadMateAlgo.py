import networkx as nx
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from datetime import datetime,timedelta
import matplotlib.patches as mpatches

'''
'''

## Setup functions ##

def add_node(network, node_id):
    network.add_node(node_id)

def add_edge(network, node1_id, node2_id):
    network.add_edge(node1_id, node2_id)

def get_network(network):
    return network

def get_friends_by_degree(network, node_id, radius):
    friends_by_degree = {}
    
    for node in network.nodes:
        degree = nx.shortest_path_length(network, node_id, node)
        if degree not in friends_by_degree:
            friends_by_degree[degree] = []
        friends_by_degree[degree].append(node)
    
    sorted_friends = {k: v for k, v in sorted(friends_by_degree.items())}
    return sorted_friends

def add_contacts_column(clients, rides):
    
    # Create an empty list to store the dictionaries
    contacts = []
    
    # Iterate over each row in the DataFrame
    for index, row in rides.iterrows():
        # Append the dictionary to the list
        contacts.append(clients.loc[clients['passenger_id'] ==  row['driver_id'], 'freinds_list'].values[0])

    # Concatenate the original DataFrame with the contacts DataFrame
    rides['contacts'] = contacts
    
    return rides

def check_30min_interval(time1, time2):
    format_str = '%H:%M'
    datetime1 = datetime.strptime(time1, format_str)
    datetime2 = datetime.strptime(time2, format_str)

    # Calculate the time difference
    time_diff = datetime2 - datetime1

    # Check if the time difference is within a 30-minute interval
    if time_diff <= timedelta(minutes=30):
        return True
    else:
        return False
    
def filter_dataframe(data, user_input):
    # Combine the conditions using logical operators
    filtered_df = data[rides['start_point_id']   == user_input[1]]  
    filtered_df = data[rides['end_point_id'] == user_input[2]]
    filtered_df = data[data['start_time'].apply(lambda x: check_30min_interval(user_input[3], x))]
    
    return filtered_df

def generate_contacts_graph(filtered_rides,  new_node_id):
    # Create an empty graph
    contacts_graph = nx.Graph()

    # Add the new node to the graph
    contacts_graph.add_node(new_node_id)

    # Iterate over each row in the DataFrame
    for index, row in filtered_rides.iterrows():
        # Get the current row's ID & Contacts
        current_id, contacts = row['driver_id'], row['contacts']

        # Add edges between the current ID and its contacts
        for contact_id in contacts:
            contacts_graph.add_edge(current_id, contact_id)

    # Add edges between the new node and existing IDs
    for index, row in filtered_rides.iterrows():
        current_id = row['driver_id']
        contacts_graph.add_edge(new_node_id, current_id)

    return contacts_graph


def plot_graph_colored_by_degree(graph, sorted_friends, user_id):
    # Create a dictionary to store the node colors based on their degree
    node_colors = {}
    max_degree = max(sorted_friends.keys())
    
    # Assign colors based on the degree, with higher degrees getting lighter colors
    for degree, nodes in sorted_friends.items():
        color = (degree / max_degree)  # Scale the color based on the degree
        for node in nodes:
            node_colors[node] = color
    
    # Create a list of colors for each node in the graph
    colors = [node_colors[node] for node in graph.nodes]
    
    # Plot the graph with nodes colored by their degree
    pos = nx.spring_layout(graph)  # Make sure user is in the center of plot
    nx.draw_networkx(graph, pos=pos, node_color=colors, cmap='Blues', with_labels=True)
    
    # Create a legend for the degrees
    legend_handles = []
    for degree in sorted_friends.keys():
        label = "Degree " + str(degree)
        color = degree / max_degree
        legend_handles.append(mpatches.Patch(color=plt.cm.Blues(color), label=label))
    
    plt.legend(handles=legend_handles)
    plt.show()

## Applying to costum data ##

rides = pd.read_csv('rides.csv',  index_col=0)
clients = pd.read_csv('clients.csv', index_col=0)

# matching connections to drivers
rides = add_contacts_column(clients,rides)

# sanity check user input
user_input = (['5','1033','1003','08:00', '3'])

# filtering according to user's input
filtered_rides = filter_dataframe(rides, user_input)

# initialing graph based available rides
filtered_graph = generate_contacts_graph(filtered_rides, int(user_input[0]))

deg_dict = get_friends_by_degree(filtered_graph, user_input[0], 4)

# If user doesn't have matches within connection - using similarity
if len(deg_dict) < 2:
    threshold = 0.11
    corr_mat = filtered_rides.corr()
    cor_graph = nx.Graph()
    cor_graph.add_node(user_input[0])
    for i, col1 in enumerate(corr_mat.columns):
        for j, col2 in enumerate(corr_mat.columns):
            if i < j:
                correlation = corr_mat.loc[col1, col2]
                if abs(correlation) >= threshold:  # Optional threshold to filter edges
                    cor_graph.add_edge(col1, col2, weight=correlation)
    pos = nx.spring_layout(cor_graph)  # Layout algorithm for node positioning
    weights = [abs(cor_graph[u][v]['weight']) * 2 for u, v in cor_graph.edges()]  # Scaling edge thickness based on correlation strength

    plt.figure(figsize=(10, 10))
    nx.draw_networkx_nodes(cor_graph, pos, node_color='lightblue', node_size=200)
    nx.draw_networkx_edges(cor_graph, pos, width=weights, edge_color='gray')
    nx.draw_networkx_labels(cor_graph, pos, font_color='black', font_size=8)
    plt.axis('off')
    plt.show()

# If he does have rellevant connections - sort by dgree
else:
    plot_graph_colored_by_degree(filtered_graph, deg_dict, user_input[0])