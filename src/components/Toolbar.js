function Toolbar({filters, selected, onSelectFilter}) {
  console.log(selected);
    return (
      <div className="toolbar">
        {filters.map((filter, i) => 
          <button 
            key={i} 
            onClick={() => onSelectFilter(filter)}
            className="toolbar-button"
            >{filter}</button>)}   
      </div>
    );
  }
  
  export default Toolbar;