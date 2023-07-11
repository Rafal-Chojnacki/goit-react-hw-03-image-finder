import React, { Component } from "react";
import css from "./searchBar.module.css"

class SearchBar extends Component {
    render() {
        return <div>
<header className={css.searchBar}>
  <form className={css.searchForm}>
    <button type="submit" className={css.searchBtn}>
      <span className={css.buttonLabel}>Search</span>
    </button>
    <input
      className={css.input}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        </div>

    }
}

export default SearchBar