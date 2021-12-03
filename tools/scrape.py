import requests
import os
import json

from bs4 import BeautifulSoup

Albums = []

URL = "http://www.1001albumsyoumusthearbeforeyoudie.net/albums-from-"

path = os.path.join(os.getcwd(), "images")

for x in range(1955, 2019):
  os.mkdir(os.path.join(path, str(x)))
  page = requests.get(URL + str(x))

  soup = BeautifulSoup(page.content, "html.parser")

  results = soup.find(id="page-content")

  job_elements = results.find_all("table", class_="image-box")

  for job_element in job_elements:
    title_element = job_element.find("td", class_="image-box-heading")
    image_element = job_element.find("td", class_="image-box-image")
    image_link = image_element.find("img", class_="image").attrs["src"]
    caption_element = job_element.find("td", class_="image-box-caption")
    title = title_element.text.strip()
    caption = caption_element.text.strip()

    img_data = requests.get(image_link).content
    file_name = caption.replace(' ', '-') + ".jpg"
    with open(os.path.join(path, str(x), file_name), 'wb') as handler:
      handler.write(img_data)

    print()
    print()
    print()
    Albums.append({"title": title, "src": image_link, "srcLocal": str(x) + "/" + file_name, "caption": caption})
  
with open(os.path.join(os.getcwd(), "config.json"), 'w') as my_file:
  json.dump(Albums, my_file, indent=4)