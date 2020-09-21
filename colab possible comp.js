<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>

.item :hover, h1 :hover, .item img :hover, title :hover {
            transform: scale(1.2);
            background-color: rgb(112, 218, 192);
        }
.title :hover{
    background-color: rgb(255, 245, 140);
}
        .container {
            display: flex;
            flex-wrap: wrap;
        }

        .item { 
            width: 400%;
            height: 400%;
            margin-top: 70px;
            margin-left: 50px;
            filter: drop-shadow(25px 25px 30px #1c2e2c);


        }

        .item img  
            width: 500px;
            height: 100%;
        }

        .item:hover {
            transform: scale(2);
            background-color: rgb(255, 209, 148);
        }


    </style>


    <title>Some nice water that goes nowhere</title>
</head>
<body style="background-color:rgba(0, 201, 90, 0.596);">
    <center><h1>Some nice water that goes nowhere</h1>
        <div class="container">
            <div class="item">
                <img src="https://i.imgur.com/ml4VjZw.jpg" alt="">
            </div>
            <div class="item">
                <img src="https://i.imgur.com/R5iOL3P.jpg" alt="">
            </div>
            <div class="item">
                <img src="https://i.imgur.com/SCa8y82.jpg" alt="">
            </div>
            <div class="item">
                <img src="https://i.imgur.com/Fm7dcaf.jpg" alt="">
            </div>
            <div class="item">
                <img src="https://i.imgur.com/htz3ocu.jpg" alt="">
            </div>
</center>
    </div>

    <script>


        const shuffleArray = (array) => {
            for(let i = array.length  - 1; i > 0; i--){
               const j = Math.floor(Math.random() * i)
                const temp = array[i]
               array[i] = array[j]
               array[j] = temp
               }
           return array
     }

    </script>

</body>
</html>