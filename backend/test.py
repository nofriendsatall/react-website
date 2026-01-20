import os

def create_directory_tree(directory):
    for root, dirs, files in os.walk(directory):
        level = root.replace(directory, '').count(os.sep)
        indent = ' ' * 4 * level
        print(f'{indent}- {os.path.basename(root)}')
        for file in files:
            print(f'{indent}  - {file}')

# Specify the root directory of your backend
backend_root = 'backend'

# Call the function to create the directory tree
create_directory_tree(backend_root)