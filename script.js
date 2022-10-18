let arr =  [
{
    name:"Folder 1",
    folders:[
        {name:"subfolder 1"},
        {name:"subfolder 2"},
        {name:"subfolder 3"},
    ]
},
{
    name:"Folder 3",
    folders:[
        {name:"subfolder 7"},
        {name:"subfolder 8"},
        {name:"subfolder 9"},
    ]
},
]


function showParent(subfolderName){
    for (let folder of arr){
        for(let subfolder of folder.folders){
            if(subfolder.name === subfolderName){
                console.log(folder.name);
                break;
            }
        }
    }
}
showParent("subfolder 1");