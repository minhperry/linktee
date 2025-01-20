import { buttonData } from '../data/buttonData.ts';
import ButtonCategoryView from './ButtonCategoryView.tsx';

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
  return (
    <div className="grid grid-cols-1">
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
      </div>
      <div className="col-span-1 grid grid-cols-1 md:grid-cols-2">
        {buttonData().map((category) => {
          return (
            <div className="flex items-center justify-center"
                 key={category.title}>
              <ButtonCategoryView
                links={category.links}
                categoryName={category.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
