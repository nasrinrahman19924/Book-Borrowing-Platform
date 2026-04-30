export default function Footer() {
  return (
    <footer className="bg-base-200 text-center p-8 mt-10">
      <h2 className="text-2xl font-bold">📚 BookApp</h2>

      <p className="mt-2">
        Your Digital Library Platform
      </p>

      <div className="mt-4 flex justify-center gap-4">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>

      <p className="mt-4 text-sm">
        © 2026 All Rights Reserved
      </p>
    </footer>
  );
}