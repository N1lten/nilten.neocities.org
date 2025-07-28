//redirect user to maintenance page, if site is down for maintenance 

var maintenanceModeEnabled = false;

var webPath = location.pathname
var maintenancePagePath
var maintenanceStatusPath
var dirSize = ""
var dirCount = 0

//console.log(webPath.length)

for(let i = 0; i < webPath.length; i++)
{
    if (webPath[i] === "/")
    {
        dirCount++;
    }
}

//console.log(dirCount)

if (dirCount == 1)
{
    maintenancePagePath = "maintenance.html"
    maintenanceStatusPath = "scripts/siteMaintenanceStatus.txt"
}
else
{
    for(var i = 1; i < dirCount; i++)
    {
        dirSize = dirSize + "../"
    }
//    console.log(dirSize)

    maintenancePagePath = dirSize + "maintenance.html"
    maintenanceStatusPath = dirSize + "scripts/siteMaintenanceStatus.txt"
}

fetch(maintenanceStatusPath)
.then((res) => res.text())
.then((text) =>
{
//    console.log(text);

    if(text != "true")
    {
        maintenanceModeEnabled = false
//        console.log("No maintenance at the moment.")
    }
    else
    {
        maintenanceModeEnabled = true
//        console.log("Page under maintenance! Sorry!")
    }
})
.catch((e) => console.error(e));

function site_maintenanceMode()
{
//    console.log(webPath)

    if(maintenanceModeEnabled == true)
    {
        location.replace(maintenancePagePath);
    }
}

function disableMaintenancePage()
{
    if(maintenanceModeEnabled != true)
    {        
        location.replace("index.html");
    }
}