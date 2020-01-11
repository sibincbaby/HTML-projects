<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Weather App</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <link rel="stylesheet" href="style.css">

</head>

<body>

    <div class="container" style="height:650px;">
        <div class="row">
            <!--title of the app-->
            <div class="col-md-12" style="margin-bottom:10px;">
                <h3 class="text-center text-primary">Weather App</h3>
                <span id="error" class="text-center"></span>
            </div>
            <!--text box and search button-->
            <div class="row form-group form-inline" id="cityDiv">

                <input type="text" name="city" id="city" class="form-control" placeholder="Enter city name">
                <button id="submitCity" class="btn btn-primary">Search City</button>
            </div>

        </div>
        <!--Getting weather info from openmap and dispaly it in this div-->

        <div id="showWeather"></div>
    </div>
    
    
    <!--jquery cdn-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <!--local js link-->
    <script src="weather.js"></script>

</body>

</html>
