import React from 'react';
import FlipMove from 'react-flip-move';

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <div class="item">
                <div class="input-group mb-3">
                    <input type="text" id={item.key} value={item.text} onChange={
                        (e) => {
                            props.setUpdate(e.target.value, item.key)
                        }
                    } class="form-control" placeholder="Item Name" aria-describedby="button-addon2" />
                    <button class="btn btn-primary" onClick={() => props.deleteItem(item.key)} type="button" id="button-addon2"><i class="fa fa-trash"></i></button>
                </div>
            </div>
        </div>
    })
    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )
}
export default ListItems;