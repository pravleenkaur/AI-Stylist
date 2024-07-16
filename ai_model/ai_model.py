import sys
import json

def analyze_preferences(preferences_list):
    # Analyze preferences and fetch products
    filtered_products = []
    for preferences in preferences_list:
        filtered_products.extend(fetch_products(preferences))
    return filtered_products

def fetch_products(preferences):
    # Expanded dummy data for illustration
    products = [
        {'gender': 'female', 'name': 'Red Dress', 'description': 'Beautiful red dress', 'image_url': 'https://media.istockphoto.com/id/1217970889/photo/beautiful-female-red-dress-without-sleeves-isolated-on-white-evening-dress.jpg?s=612x612&w=0&k=20&c=SV4eWKwIY-HsUkrCi6X2jApUBcC5-lKFSd_tKG5Ewcw=', 'price': 50.0, 'color': 'red', 'category': 'dress', 'size': 'medium'},
        {'gender': 'female', 'name': 'Red Dress', 'description': 'A red dress', 'image_url': 'https://littleboxindia.com/cdn/shop/files/f1d4802c9c39391020211dc1fb328304_540x.jpg?v=1719493846', 'price': 90.0, 'color': 'red', 'category': 'dress', 'size': 'large'},
        {'gender': 'female', 'name': 'Brown Dress', 'description': 'A Brown dress', 'image_url': 'https://littleboxindia.com/cdn/shop/files/1_4cec2558-ec37-45fc-a748-74c0110adb6d_540x.jpg?v=1714737986', 'price': 90.0, 'color': 'brown', 'category': 'dress', 'size': 'large'},
        {'gender': 'female', 'name': 'White Top', 'description': 'A cute white top', 'image_url': 'https://oyela.in/cdn/shop/files/1_59d9df8e-f96f-4847-b199-7e4320e46f33.jpg?v=1719424247&width=900', 'price': 70.0, 'color': 'white', 'category': 'top', 'size': 'medium'},
        {'gender': 'female', 'name': 'Blue Dress', 'description': 'Elegant blue dress', 'image_url': 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/a/1ad5313NF-CD2022032475321MD-Blue_1.jpg?rnd=20200526195200&tr=w-1080', 'price': 120.0, 'color': 'blue', 'category': 'dress', 'size': 'large'},
        {'gender': 'female', 'name': 'White Top', 'description': 'Elegant white top', 'image_url': 'https://littleboxindia.com/cdn/shop/products/911d82e972f4854177f55666f0030913_540x.jpg?v=1688211754', 'price': 45.0, 'color': 'white', 'category': 'top', 'size': 'medium'},
        {'gender': 'female', 'name': 'Pink Dress', 'description': 'A beautiful pink dress', 'image_url': 'https://littleboxindia.com/cdn/shop/products/1d5ac0cb48c39780713e0c070f89a8ad_540x.jpg?v=1697626405', 'price': 60.0, 'color': 'pink', 'category': 'dress', 'size': 'medium'},
        {'gender': 'female', 'name': 'Pink Dress', 'description': 'A beautiful pink midi dress', 'image_url': 'https://littleboxindia.com/cdn/shop/files/2286bfea291259dac3a2fa7ec6704b9d_540x.jpg?v=1720444149', 'price': 60.0, 'color': 'pink', 'category': 'dress', 'size': 'medium'},
        {'gender': 'female', 'name': 'Pink Dress', 'description': 'A beautiful pink split dress', 'image_url': 'https://littleboxindia.com/cdn/shop/files/aeeaccf2f4a226747423e6a6714da19b_540x.jpg?v=1720108520', 'price': 60.0, 'color': 'pink', 'category': 'dress', 'size': 'medium'},
        {'gender': 'female', 'name': 'Black Dress', 'description': 'A black dress', 'image_url': 'https://littleboxindia.com/cdn/shop/files/003fccc2c6fb5d366543d64a808c0514_540x.jpg?v=1720109521', 'price': 60.0, 'color': 'black', 'category': 'dress', 'size': 'small'},
        {'gender': 'female', 'name': 'Black Dress', 'description': 'A black dress', 'image_url': 'https://littleboxindia.com/cdn/shop/files/aa35e6314e8a26a44c4619e343cd6142_300x.jpg?v=1720189689', 'price': 60.0, 'color': 'black', 'category': 'dress', 'size': 'small'},
        {'gender': 'female', 'name': 'Black Dress', 'description': 'A black dress', 'image_url': 'https://littleboxindia.com/cdn/shop/files/fb53ba9826a1e752f7f8e37481ef1f66_300x.jpg?v=1720194676', 'price': 60.0, 'color': 'black', 'category': 'dress', 'size': 'small'},
        {'gender': 'female', 'name': 'Black Dress', 'description': 'A black dress', 'image_url': 'https://littleboxindia.com/cdn/shop/files/606_2_300x.jpg?v=1720608644', 'price': 60.0, 'color': 'black', 'category': 'dress', 'size': 'small'},
        {'gender': 'female', 'name': 'Black Dress', 'description': 'A black dress', 'image_url': 'https://littleboxindia.com/cdn/shop/files/607_2_300x.jpg?v=1720608711', 'price': 60.0, 'color': 'black', 'category': 'dress', 'size': 'small'}
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
