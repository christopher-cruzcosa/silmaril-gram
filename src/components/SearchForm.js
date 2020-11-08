import React from "react";

function SearchForm(props) {
  return (
    <div><form>
    <div className="form-group">
      <label htmlFor="search">Search:</label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search For an Employee"
        id="search"
      />
      <br />
      <p>Sort by name:</p>
    </div>
  </form>
  <button onClick={props.handleFormSubmit} name="asc" className="btn btn-primary mr-5">
  Asc'ing
</button>

<button onClick={props.handleFormSubmit} name="desc" className="btn btn-danger">
  Desc'ing
</button></div>
    
    
  );
}

export default SearchForm;
