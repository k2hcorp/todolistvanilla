/*
data-set
data {
    username: String,
    date : String,
    card : [
        {
            card_title:String,
            list:[
                {
                    list_content:String,
                    list_complete:boolean
                },{},{}
            ],
            complete_num: number,
            total_num: number
        },{},{}, ... ]
}
*/
let data = {
    username: "Gyopil",
    date: "2019. 02. 22",
    card: [
        {
            card_id : "xcznjda",
            card_title:"운동",
            list:[
                {
                    item_id : "asdfsdaf",
                    item_content:"조깅 - 아침",
                    item_complete:true
                },{
                    item_id : "djavnsdv",
                    item_content:"수영 - 저녁",
                    item_complete:false
                },{
                    item_id : "dajkfsd",
                    item_content:"명상 - 자기 전",
                    item_complete:false
                }
            ],
            complete_num: 1,
            total_num: 3
        },
        {
            card_id : "xcvxvc",
            card_title:"약속",
            list:[
                {
                    item_id : "sdnxcv",
                    item_content:"점심 식사 - 서울역",
                    item_complete:true
                },{
                    item_id : "sdjknvkxcv",
                    item_content:"저녁 식사 - 사당",
                    item_complete:false
                }
            ],
            complete_num: 1,
            total_num: 2
        }
    ],
    drag : {
        init_drag : false,
        move_drag : false,
        //arrange_style = HORIZONTAL | VERTICAL | GRID 
        arrange_style : '',
        global_container_id : '',
        dragged_id : '',
        guide_id : '',
        container_id : '',
        dX : 0,
        dY : 0
    }
}