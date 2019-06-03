import React from "react";
import * as PropTypes from "prop-types";

const TaskItem = props => {
    console.count("RENDERITEM");
    console.count("RENDER_ITEM_" + props.item.uid);
    return (
        <li>
            {props.beingEditedItem !== props.ind ? (
                <div>
                    {props.item.title} -<button onClick={props.onDeleteClick}>X</button>
                </div>
            ) : (
                <form>
                    <input type="text" />
                    <button type="submit">Add</button>
                </form>
            )}
        </li>
    );
};

TaskItem.propTypes = {
    onDoubleClick: PropTypes.func,
    beingEditedItem: PropTypes.number,
    ind: PropTypes.number,
    item: PropTypes.any,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func,
    ref: PropTypes.func
};
export default TaskItem;
