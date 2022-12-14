# Scripts

- **Install:**  ``` npm install ```
- **Build:** ``` npm run build ```
- **Lint:**  ``` npm run lint ```
- **Prettier:**  ``` npm run prettier ```
- **Run unit tests:**  ``` npm run test ```
- **Start server:**  ``` npm run start ```

#Usage
```
The server will listen on port 5000:
```
###Brief instructions
http://localhost:5000/

###Endpoint to resize images
http://localhost:5000/pictures/

###Expected query arguments are:

##name: Available names are:
**encenadaport**
**fjord**
**icelandwaterfall**
**palmtunnel**
**santamonica**
**width:** numerical pixel value > 0
**height:** numerical pixel value > 0
####Example 1
http://localhost:5000/pictures/ Will display  The name not defined

####Example 2
http://localhost:5000/pictures?name=fjord Will display The width lessthan 0 or undefined.

####Example 3
http://localhost:5000/pictures?name=fjord&width=200&height=200 Will scale the fjord image to 200 by 200 pixels and store the resulting image. On subsequent calls will serve the resized image instead of resizing the original again.

####Example 4
http://localhost:5000/pictures?name=fjord&width=-200&height=200  The width lessthan 0 or undefined.

####Example 5
http://localhost:5000/pictures?name=fjord&width=200  The height lessthan 0 or not defined.

