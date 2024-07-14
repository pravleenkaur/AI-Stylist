import sys
import json

def analyze_preferences(preferences_list):
    # Dummy implementation of fetch_products
    filtered_products = []
    for preferences in preferences_list:
        filtered_products.extend(fetch_products(preferences))
    return filtered_products

def fetch_products(preferences):
    # Dummy data for illustration
    products = [
        {'gender': 'female', 'name': 'Red Dress', 'description': 'Beautiful red dress', 'image_url': 'https://media.istockphoto.com/id/1217970889/photo/beautiful-female-red-dress-without-sleeves-isolated-on-white-evening-dress.jpg?s=612x612&w=0&k=20&c=SV4eWKwIY-HsUkrCi6X2jApUBcC5-lKFSd_tKG5Ewcw=', 'price': 50.0, 'color': 'red', 'category': 'dress', 'size': 'medium'},
        {'gender': 'female', 'name': 'Red Dress', 'description': 'ugly red dress', 'image_url': 'https://example.com/red_dress1.jpg', 'price': 90.0, 'color': 'red', 'category': 'dress', 'size': 'medium'},
        {'gender': 'male', 'name': 'Blue Shirt', 'description': 'Comfortable blue shirt', 'image_url': 'https://example.com/blue_shirt.jpg', 'price': 25.0, 'color': 'blue', 'category': 'shirt', 'size': 'large'},
        # Add more products as needed
    ]

    # Example filtering based on preferences
    filtered_products = []
    for product in products:
        match = True
        for key, value in preferences.items():
            if product.get(key) != value:
                match = False
                break
        if match:
            filtered_products.append(product)
    
    return filtered_products if filtered_products else products

if __name__ == '__main__':
    try:
        # Read preferences from standard input (usually provided by Node.js subprocess)
        preferences_json = sys.stdin.read().strip()
        preferences_list = json.loads(preferences_json)
        
        # Ensure preferences_list is a list of dictionaries
        if not isinstance(preferences_list, list):
            raise ValueError("Input preferences should be a list of dictionaries")
        
        # Analyze preferences and fetch products
        recommended_products = analyze_preferences(preferences_list)
        
        # Output recommended products as JSON
        print(json.dumps(recommended_products))
    
    except json.JSONDecodeError as e:
        print("Error parsing JSON:", str(e))
        sys.exit(1)
    except ValueError as ve:
        print("ValueError:", str(ve))
        sys.exit(1)
