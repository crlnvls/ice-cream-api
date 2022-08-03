docker run -it \
    -e PORT=3000 \
    -p 3000:3000 \
    --name the-icecream \
    -w /code \
    --mount type=bind,src="$(pwd)",target=/code \
    node:slim \
    bash -c "npm install && npm run dev"
