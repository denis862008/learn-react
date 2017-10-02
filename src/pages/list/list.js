import React from 'react';
import ListItem from './list-item';
import bindAll from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ListPage extends React.Component {
    static path = '/list';
    static propTypes = {
        list: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        bindAll(this, ['renderItems']);
    }

    renderItems(item, idx) {
        return(
            <ListItem key={ idx } id={ item.id } name={ item.name } youtube={ item.youtube } />
        );
    }

    render() {
        const { items } = this.props.list;

        return(
            <div className="row">
                <div className="col-xs-12">
                    <h3>Список</h3>

                    <table className="table table-bordered table-hover test-table-t1">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        { items.map(this.renderItems) }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.list
    };
}

export default connect(mapStateToProps)(ListPage);
