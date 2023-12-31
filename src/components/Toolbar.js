function Toolbar({filters, selected, onSelectFilter}) {
    return (
      <div className="toolbar">
        {filters.map((filter, i) => 
          <button 
            key={i} 
            onClick={() => onSelectFilter(filter)}
            className={`toolbar-button ${filter === selected ? "--active" : ""}`}
            >{filter}</button>)}   
      </div>
    );
  }
  
  export default Toolbar;