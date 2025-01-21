import { buttonData } from '../data/buttonData.ts';
import ButtonCategoryView from './ButtonCategoryView.tsx';
import { useState } from 'react';

interface ProfileInfo {
  name: string;
  username: string;
  avatarUrl?: string;
  bio?: string;
}

export default function WholeButtonsView() {
  const profile: ProfileInfo = {
    name: 'Minh',
    username: '@minhperry',
    avatarUrl: 'https://avatars.githubusercontent.com/u/46137516?v=4',
    bio: '22, Student & (Web) Developer',
  };
  const [isFill, setIsFill] = useState<boolean>(false);

  function toggle() {
    setIsFill((prev) => !prev);
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 max-w-[900px]">
        <div className="col-span-1 mt-6 text-center">
          {profile.avatarUrl ? (
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-gray-800"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-800 mx-auto mb-4 ring-4 ring-gray-700">
              <img
                src="https://www.claudeusercontent.com/api/placeholder/96/96"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          )}
          <h1 className="text-2xl font-bold text-white">{profile.name}</h1>
          <p className="text-gray-400">{profile.username}</p>
          {profile.bio && <p className="mt-2 text-gray-400">{profile.bio}</p>}
          <div className="mt-3">
            <label className="inline-flex items-center cursor-pointer">
              <span className="me-3 text-sm font-medium text-slate-300 select-none">
                Fill
              </span>
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isFill}
                onClick={toggle}
              />
              <div className="relative w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-slate-300 select-none">
                Line
              </span>
            </label>
          </div>
        </div>

        <div className="col-span-1 grid grid-cols-1 md:grid-cols-2">
          {buttonData(!isFill ? 'fill' : 'line').map((category) => {
            return (
              <div
                className="flex items-center justify-center"
                key={category.title}
              >
                <ButtonCategoryView
                  links={category.links}
                  categoryName={category.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
