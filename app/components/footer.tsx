export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="flex justify-center items-center">
        <p className="text-sm">© {currentYear} Reserved by Yanga Rubushe</p>
      </footer>
    );
  }
  