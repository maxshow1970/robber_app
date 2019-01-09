import React, { Component } from 'react'
import { AppHeader } from './components/header'
import { AppDrawer } from './components/drawer'
import { AppButtons} from  './components/buttons'
import { AppList} from './components/list'
import Popover from 'material-ui/Popover'
import {AppForm} from './components/form'
import axios from "axios"
import  SortByButtons   from './components/sort_buttons'
import SearchInput from './components/search_input'
import KnapsackInput from './components/knapsack_input'
import {KnackpackList} from './components/knackpack_list'
import {KnackpackButtons} from './components/knackpack_button'
import  LabelSum  from './components/labelsum'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDrawerOpen: false,
      isPopoverOpen: false,
      popoverElement: null,
      magazinList: [],
      Searchnames: [],
      sizeKnapsack: 100,
      knapsackList: [],
      selectedSum: 0
    }


  }

  componentDidMount() {
        axios
            .get("http://localhost:3000/magazin")
            .then(response => {

                const newMagazin = response.data.map(c => {
                    return {
                        id: c.id,
                        name: c.name,
                        size: c.size,
                        price: c.price
                    };
                });

                const newState = Object.assign({}, this.state, {
                    magazinList: newMagazin,
                    Searchnames:  newMagazin
                });

                this.setState(newState);
                // this.setState(Searchnames: newState)
            })
            .catch(error => console.log(error));


  }

  onAdd(item){
        let magazinList= this.state.magazinList
        magazinList.push(item)
        this.setState({magazinList, isPopoverOpen: false})
  }

    changeList(prop) {
        var term = prop['prop'].toLowerCase(),
            magazinList = this.state.Searchnames,
            newList = [];

        for (var i = 0; i < magazinList.length; i++) {
            if (magazinList[i]['name'].toLowerCase().indexOf(term) > -1) {
                newList.push(magazinList[i]);
            }
        }
        this.setState({magazinList: newList});
    }

    changeKnackpack(prop) {
        var term = prop['prop'].toLowerCase();
        this.setState({sizeKnapsack: term});
    }


    sortList(prop) {
        var dataObj = this.state.magazinList;

        // sort by name
        if(prop.prop.type === 'nameASC'){
            if(prop.prop.term === true){
                dataObj.sort(function(a, b) {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();
                    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
                });
            }
            else{
                dataObj.sort(function(a, b) {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();
                    return (nameA > nameB) ? -1 : (nameA < nameB) ? 1 : 0;
                });
            }
        }
        else{
            // sort by size
            if(prop.prop.term === true){
                dataObj.sort(function(a, b) {
                    var sizeA = a.size;
                    var sizeB = b.size;
                    return (sizeA < sizeB) ? -1 : (sizeA > sizeB) ? 1 : 0;
                });
            }
            else{
                dataObj.sort(function(a, b) {
                    var sizeA = a.size;
                    var sizeB = b.size;
                    return (sizeA > sizeB) ? -1 : (sizeA < sizeB) ? 1 : 0;
                });
            }
        }
        this.setState({magazinList: dataObj});
    }

  render() {
   return (
     <div>
         <AppHeader
             onLeftIconClick = {() => this.setState({ isDrawerOpen: true })}
         />
         <AppDrawer
             open = {this.state.isDrawerOpen}
             onToggle = {(isDrawerOpen) => this.setState({ isDrawerOpen })}
         />
      <div className="main">

        <div className="containerMagazin">
            <h1>Magazin</h1>

            <SearchInput onSearchTermChange={prop => this.changeList({prop})}/>
            <SortByButtons sortList={prop => this.sortList({prop})}/>
           <AppButtons
              itemsChecked = {this.state.magazinList.map(i => i.checked).filter(i => i)}
              onDelete = {() => {
                let magazinList = this.state.magazinList.filter(i => !i.checked)
                this.setState({ magazinList })
              }}
              onAdd = {(popoverElement) =>{this.setState({
                  popoverElement,
                  isPopoverOpen: true
              })}}

              onCopy = {() => {

                  function isinarrKnapsackList(item, arrName){
                      let flag = false;
                      let knapsackList = arrName;
                      if (knapsackList.length ===0){
                          flag = true;
                      } else {
                          // for(var i = 0; i < knapsackList.length; i++) {
                          const index = knapsackList.findIndex(i => i.id === item.id);
                          if (index !== 1) {
                              flag = true
                          } else {
                              flag = false
                          }
                              // if (item.name in  knapsackList.name  ){
                              //     flag = false;
                              //     // break;
                              // } else {
                              //     flag = true
                              // }
                          // }
                      }
                      return flag;
                  }


                  let knapsackList_temp = this.state.magazinList.filter(i => i.checked).slice()
                  let knapsackList = this.state.knapsackList

                  for (var i = 0; i < knapsackList_temp.length; i++) {
                      if(isinarrKnapsackList(knapsackList_temp[i],knapsackList) ) {
                          let tt = {name:'',size:'',price: ''}
                          tt.name = knapsackList_temp[i].name
                          tt.size = knapsackList_temp[i].size
                          tt.price = knapsackList_temp[i].price
                          let sumssize =  this.state.selectedSum

                          let selectedSum =sumssize + knapsackList_temp[i].size
                          this.setState({selectedSum})

                          knapsackList.push(tt);
                      }
                      // knapsackList.push(knapsackList_temp[i]);
                  }

                  this.setState({ knapsackList })
              }}

           />
          <Popover
              open={this.state.isPopoverOpen}
              anchorEl={this.state.popoverElement}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={() => this.setState({isPopoverOpen: false})}
              style={{width: 300, padding: '15px 30px'}}
          >
             <AppForm
                onAdd={this.onAdd.bind(this)}

              />
          </Popover>
           <AppList
              items = {this.state.magazinList}
              onCheck={(checked, idx) => {
                let {magazinList} = this.state
                magazinList[idx].checked = checked
                this.setState({magazinList})
              }}
           />
        </div>
        <div className="containerRobber">
             <h1>Knapsack</h1>
            <KnapsackInput onInputPackChange={prop => this.changeKnackpack({prop})}/>

            <SortByButtons sortList={prop => this.sortList({prop})}/>
            <LabelSum
                selectedSum = {this.state.selectedSum}
                sizeKnapsack = { this.state.sizeKnapsack}


            />

            <KnackpackButtons
                itemsKChecked = {this.state.knapsackList.map(i => i.checked).filter(i => i)}
                onDelete = {() => {
                    let knapsackList = this.state.knapsackList.filter(i => !i.checked)
                    this.setState({ knapsackList })
                }}
            />
            <KnackpackList
                itemsK = {this.state.knapsackList}
                onCheck={(checkedK, idx) => {
                    let {knapsackList} = this.state
                    knapsackList[idx].checked = checkedK
                    this.setState({knapsackList})
                }}
            />
        </div>
      </div>
     </div>
    )
  }
}

