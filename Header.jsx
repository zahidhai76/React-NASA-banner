import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

const Header = ( {data} ) => {
    const currentDate = () => {
        const currentYear = new Date().getFullYear();
        const nameOfMonth = new Intl.DateTimeFormat('en-UK', {month: 'long'}).format(
            new Date(),
          );    
          const currentDay = new Date().getDate();
        const together = [nameOfMonth, currentDay, currentYear].join(' ');
        return together;
    }
  
  const sectionStyle = {
    width: "100%",
    backgroundImage: `url(${data.url})`,
    backgroundSize: 'cover',
    padding: '16px',
    textAlign: 'center',
    background: 'black',
    color: 'white',
  };

  return (
    <div style={sectionStyle}>
        <h1> My Website</h1>
        <h5>{currentDate()}</h5>
    </div>
  )
}

export default Header
