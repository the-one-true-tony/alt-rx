import React, { Component } from 'react';
import ConceptListItem from './concept_list_item';

export default class ConceptList extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedOption: "",
      collapseList: false
    };
    this.updateSelected = this.updateSelected.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  componentWillReceiveProps(){
    this.setState({
      collapseList: false
    });
  }
  updateSelected(id){
    this.setState({
      selectedOption: id,
      collapseList: true
    });
  }

  toggleCollapse(){
    this.setState({
      collapseList: !this.state.collapseList
    });
  }

  render(){
    let { conceptList, getAltConcept } = this.props;
    let { selectedOption, collapseList } = this.state;

    const collapseButton = (
      <div>
        <i className={ collapseList
            ? "fa fa-angle-double-down"
            : "fa fa-angle-double-up" }
          aria-hidden="true"
          onClick={this.toggleCollapse}></i>
      </div>
    );

    switch (true){
      case (conceptList.length === 1):
        return(
          <ul>
            {conceptList.map(concept => (
              <ConceptListItem
                key={concept.rxcui}
                concept={concept}
                selectConcept={getAltConcept}
                selected={selectedOption === concept.rxcui}
                collapsed={collapseList}
                updateSelected={this.updateSelected}
              />
            ))}
          </ul>
        );
      case (conceptList.length > 1):
        return(
          <section>
            <ul>
              {conceptList.map(concept => (
                <ConceptListItem
                  key={concept.rxcui}
                  concept={concept}
                  selectConcept={getAltConcept}
                  selected={selectedOption}
                  collapsed={collapseList}
                  updateSelected={this.updateSelected}
                />
              ))}
            </ul>
            { collapseButton }
          </section>
        );
      default:
        return(
          <p>No matches found</p>
        );
    }
  }
}
