// let colors = ['#9E9E9E', '#388E3C', '#4527A0', '#EF6C00'];
// let  newItem = {name: 'New Item', level: 1, description: ''};
//  let  selected = newItem;
//  let root = newItem;
//  let list = [];
//  let chartElementList  = [];
//  let WIDTH = 1000;
//   let HEIGHT = 1000;
// let ELEMENT_WIDTH = 80;
// let  ELEMENT_HEIGHT = 97;
// let PADDING = 100;
// let  zoom = 1;
// let  ZOOM_FACTOR = 1.2;
// let  dragMode = false;
// let moveMode = false;
//  let startX = 0;
//  let startY = 0;
//  let x0 = 0;
//  let y0 = 0;
//  let x = 0;
//  let y = 0;
// let viewBox = `${x} ${y} ${WIDTH} ${HEIGHT}`;

// let DB_NAME = 'org-data';
//  let DB_VERSION = 2;
//  let STORAGE_NAME = 'data';


//  function getItem(id){
//     const result= new Promise((resolve, reject) => {
//       DB.then(db => {
//         const transaction = db.transaction(STORAGE_NAME, 'readonly');
//         const store = transaction.objectStore(STORAGE_NAME);
//         const request = store.get(id);
//         request.onsuccess = () => {
//           resolve(request.result);
//         };
//       });
//     });
//     return result;
//   }

//  function setViewBox() {
//     viewBox = `${x * zoom} ` +
//       `${y * zoom} ` +
//       `${WIDTH * zoom} ` + 
//       `${HEIGHT * zoom}`;
//   }

//   function onZoomOut() {
//     zoom *= ZOOM_FACTOR;
//     setViewBox();
//   }




//  function getRoot() {
//     if (id) {
//     getItem(id).then(item => {
//         root = item;
//         selected = root;
//       });
//     }
//   }

//  function getList(){
//     if (id) {
//         getList(id).then(list => {
//         list = list;
//         chartElementList = setChartElementList(list);

      
//       });
//     }
//   }

 
//  function  add(item) {
//     const result= new Promise((resolve, reject) => {
//       DB.then(db => {
//         const transaction = db.transaction(STORAGE_NAME, 'readwrite');
//         const store = transaction.objectStore(STORAGE_NAME);
//         const request = store.add(item);
//         request.onsuccess = () => {
//           resolve(Number(request.result));
//         }
//       });
//     });
//     return result;
//   }

 
//  function onCreate() {
//     const item = {
//       name: 'aus',
//       parent: 0,
//       root: 0,
//       level: 0,
//       description: ''
//     };
//     add(item).then(id => {
//       id = (id);
//       getRoot();
//       getList();
//     });
//   }



//    function onAdd(item) {
//     if(list.length<10){
//       toggle_count=toggle_count+1
//       Add_newItem();
//       Add_newItem();
//     }
//   }

//   function  setChartSize() {
//     if (chart) {
//       WIDTH = chart.nativeElement.clientWidth;
//       HEIGHT = chart.nativeElement.clientHeight;
//       setViewBox();
//       chartElementList = setChartElementList(list);
//     }
//   }


//   let toggle_count=0 ; 

// function  Add_newItem(){
//     add({
//       name: 'aus'+selected.id,
//       parent: selected.id,
//       root: id,
//       level: selected.level + 1,
//       description: ''
//     }).then(id =>
//        getList()
//        );
//       if(toggle_count==4){
//         onZoomOut()
//       }
//        setChartSize();
//   }


//    function onClick(item) {
//     selected = item;
//     onAdd(item)
//   }

//   function onDelete() {
//     if (selected.id) {
//       delete(selected.id).then(() => {
//         selected = root;
//         getList();
//       });
//     }
//   }


//   function setChartElementList(list){
//     const result = [];
//     const x = WIDTH / 2;
//     const y = ELEMENT_HEIGHT;
//     const root = {
//       item: root,
//       x: x,
//       y: y,
//       childrenCount: 0,
//       category: 0
//     }
//     result.push(root);
//     setChildren(result, root, list);
//     shiftChartElemens(result);
//     setConnection(result);
//     return result;
//   }


//   function  setChildren(result, parent, list) {
//     const children = list.filter(item => item.parent === parent.item.id);
//     parent.childrenCount = children.length;
//     for (let i = 0; i < children.length; i++) {
//       const child = children[i];
//       const offset = parent.x - (children.length - 1) / 2 * (ELEMENT_WIDTH + PADDING *2);
//       const element = {
//         x: offset + (ELEMENT_WIDTH + PADDING * 2) * i,
//         y: parent.y + ELEMENT_HEIGHT * 2,
//         item: child,
//         parent: parent,
//         category: parent.category || i + 1,
//         childrenCount: 0
//       };
//       result.push(element);
//       setChildren(result, element, list);
//     }
//   }

//   function setConnection(list) {
//     for (let e of list) {
//       if (e.parent && e.item.level) {
//         e.connection = `M ${e.x} ${e.y - ELEMENT_HEIGHT / 2} `+
//           `C ${e.x} ${e.y - ELEMENT_HEIGHT}, ` +
//           `${e.parent.x} ${e.parent.y + ELEMENT_HEIGHT}, ` +
//           `${e.parent.x} ${e.parent.y + ELEMENT_HEIGHT / 2}`
//       }
//     }
//   }

//  const compareElements = (a, b) => {
//     if (!a.parent || !b.parent) {
//       return 0;
//     }
//     if (a.parent.x < b.parent.x) {
//       return 1;
//     }
//     if (a.parent.x > b.parent.x) {
//       return 1;
//     }
//     if (a.x < b.x) {
//       return -1;
//     }
//     return 1;
//   };

//   function shiftChartElemens(list) {
//     let level = 1;
//     while(true) {
//       let offset = 0;
//       const elementList = list.filter(e => e.item.level === level);
//       if (!elementList.length) {
//         break;
//       }
//       elementList.sort(compareElements);
//       for (let i = 0; i < elementList.length - 1; i++) {
//         let element = elementList[i];
//         let sibling = elementList[i + 1];
//         let space = sibling.x - ELEMENT_WIDTH - 2 * PADDING - element.x;
//         if (space < 0) {
//           sibling.x -= space;
//           list.filter(e => e.parent === element).forEach(e => e.x -= space);
//           offset = Math.max(-space, offset);
//         }
//       }
//       list.filter(e => e.item.level >= level).forEach(e => e.x -= offset / 2);
//       level++;
//     }
//   }