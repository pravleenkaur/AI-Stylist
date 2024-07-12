import sys
import numpy as np
from sklearn.neighbors import NearestNeighbors

# Sample data: Users' preferences (e.g., color, style)
user_preferences = np.array([
    [1, 0, 0],  # User 1: prefers color 1, not 2 or 3
    [0, 1, 0],  # User 2: prefers color 2, not 1 or 3
    [0, 0, 1],  # User 3: prefers color 3, not 1 or 2
])

def recommend(preference):
    # Convert preference list to numpy array if needed
    preference_array = np.array(preference).reshape(1, -1)  # Reshape to ensure it's 2D

    model = NearestNeighbors(n_neighbors=1)
    model.fit(user_preferences)
    _, indices = model.kneighbors(preference_array)
    return indices[0][0]

if __name__ == '__main__':
    # Ensure preference input from command line arguments
    if len(sys.argv) != 4:
        print("Usage: python ai_model.py <preference1> <preference2> <preference3>")
        sys.exit(1)
    
    preference = [int(x) for x in sys.argv[1:4]]
    recommendation = recommend(preference)
    print(f"Recommendation for the new user: User {recommendation + 1}")
