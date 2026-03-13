import os

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    out_lines = []
    state = 'NORMAL'
    modified = False
    
    for line in lines:
        if line.startswith('<<<<<<< HEAD'):
            state = 'IN_HEAD'
            modified = True
        elif line.startswith('======='):
            state = 'IN_INCOMING'
        elif line.startswith('>>>>>>>'):
            state = 'NORMAL'
        else:
            if state == 'NORMAL' or state == 'IN_HEAD':
                out_lines.append(line)
                
    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(out_lines)
        print(f"Fixed {filepath}")

def main():
    src_dir = r"c:\Users\sumam\OneDrive\Documents\Inscribe_mvjce\inscribe.mvjce.edu.in"
    for root, dirs, files in os.walk(src_dir):
        if 'node_modules' in root or '.git' in root:
            continue
        for file in files:
            if file.endswith(('.jsx', '.js', '.css', '.html')):
                filepath = os.path.join(root, file)
                try:
                    fix_file(filepath)
                except Exception as e:
                    print(f"Could not read {filepath}: {e}")

if __name__ == '__main__':
    main()
