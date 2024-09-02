import { } from "react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl">Copyright &copy; 2024. All rights are reserved</h3>
          <div className="flex items-center gap-2">
            <a href="https://github.com/Rayan37307" target="_blank" rel="noreferrer" aria-label="github">
              <svg className="tabler-icon tabler-icon-brand-github h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" />
            </a>
            <a href="https://www.linkedin.com/in/rayan-mansour-37307/" target="_blank" rel="noreferrer" aria-label="linkedin">
              <svg className="tabler-icon tabler-icon-brand-linkedin h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
