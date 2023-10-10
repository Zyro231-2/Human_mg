import React, { useState, useEffect } from "react";
import { FaGithub } from 'react-icons/fa';
import HacktoberFestLogo from './assets/logo-hacktoberfest.svg';

export default function Footer()
{
  const [contributors, setContributors] = useState([]);

  useEffect(() =>
  {
    fetch('https://api.github.com/repos/Zyro231-2/Human_mg/contributors')
      .then((res) => res.json())
      .then((data) => setContributors(data));
  }, []);

  return (
    <footer className='flex flex-row bg-gray-900 text-gray-500 w-100 justify-evenly py-10'>
      <div className='flex flex-col items-start'>
        <div>
          {/* hacktoberfest logo section */}
          {/* hacktoberfest logo */}
          <a href='https://hacktoberfest.com/' target='_blank'>
            <img
              src={HacktoberFestLogo}
              alt='Hacktoberfest Logo'
              className='cursor-pointer'
            />
          </a>
        </div>
        <div className='flex flex-col items-start mt-10'>
          {/* github link section */}
          {/* github link */}
          <span className='text-gray-300 font-mono font-semibold mt-6 mb-2 text-center'>
            Got ideas? We've got room for PRs!
          </span>
          <div className='flex flex-row cursor-pointer hover:text-gray-300'>
            <FaGithub className='h-6 w-6 inline-block mr-2' />
            <a
              href='https://github.com/Zyro231-2/Human_mg'
              target='_blank'
              className='hover:underline'>
              <span>GitHub Repo Link</span>
            </a>
          </div>
        </div>
      </div>
      <div className="">
        {/* contriutor's section */}
        {/* contriutor's section */}
        <span className="font-mono font-bold text-center">Contributors</span>
        <hr className="border-gray-300 my-6" />
        <div className="flex flex-wrap justify-center">
          {contributors.map((contributor) => (
            <a
              href={contributor.html_url}
              target="_blank"
              rel="noreferrer"
              key={contributor.id}
              className="mx-4 my-2" 
            >
              <img
                src={contributor.avatar_url}
                alt={contributor.login}
                className="h-10 w-10 rounded-full"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}