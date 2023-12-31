import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  city: string;
  onChange: (city: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ city, onChange, onKeyDown }: SearchBarProps) => (
  <div className={styles.container}>
    <input
      className={styles.searchBar}
      type="text"
      value={city}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      placeholder="Type a city and press Enter"
    />
  </div>
);
