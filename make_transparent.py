from PIL import Image
from collections import deque

img = Image.open('d:/portfolio/public/pic.jpg').convert('RGBA')
w, h = img.size
pixels = img.load()

# Connected component flood fill from edges
visited = [[False] * w for _ in range(h)]
queue = deque()

def is_white_pixel(r, g, b):
    return r > 240 and g > 240 and b > 240

# Add all border pixels that are white
for x in range(w):
    r, g, b, _ = pixels[x, 0]
    if is_white_pixel(r, g, b):
        queue.append((x, 0))
        visited[0][x] = True
    r, g, b, _ = pixels[x, h - 1]
    if is_white_pixel(r, g, b):
        queue.append((x, h - 1))
        visited[h - 1][x] = True

for y in range(h):
    r, g, b, _ = pixels[0, y]
    if is_white_pixel(r, g, b):
        queue.append((0, y))
        visited[y][0] = True
    r, g, b, _ = pixels[w - 1, y]
    if is_white_pixel(r, g, b):
        queue.append((w - 1, y))
        visited[y][w - 1] = True

while queue:
    x, y = queue.popleft()
    # Make background pixel fully transparent
    pixels[x, y] = (0, 0, 0, 0)

    for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        nx, ny = x + dx, y + dy
        if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
            visited[ny][nx] = True
            r, g, b, _ = pixels[nx, ny]
            if is_white_pixel(r, g, b):
                queue.append((nx, ny))

img.save('d:/portfolio/public/pic-transparent.png', 'PNG')
print("Saved d:/portfolio/public/pic-transparent.png successfully!")
