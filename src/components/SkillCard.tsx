export interface SkillCardProps {
  title: string;
  skills: string;
  progress: number;
  color: 'blue' | 'purple' | 'green';
}

export default function SkillCard({ title, skills, progress, color }: SkillCardProps) {
  const colorMap = {
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    green: 'text-green-400',
  };

  const progressColorMap = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
  };

  return (
    <div className="bg-gray-800 p-4 md:p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
      <h4 className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 ${colorMap[color]}`}>{title}</h4>
      <div className="space-y-2">
        <p className="text-gray-300 text-sm md:text-base">{skills}</p>
        <div className="w-full bg-gray-700 h-2 rounded-full">
          <div 
            className={`${progressColorMap[color]} h-full rounded-full transition-all duration-1000`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}