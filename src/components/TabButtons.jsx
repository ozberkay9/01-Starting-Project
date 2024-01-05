export default function TabButton({ children, isSelected, ...props }) {
  console.log("TabButton component executing");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}> 
        {" "} 
        {children}{" "}
      </button>
    </li>
  );
}
