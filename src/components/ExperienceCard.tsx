// ...existing code...

export interface ExperienceCardProps {
  title: string;
  company?: string;
  period?: string;
  completedWorks?: string[];
  team?: string;
  responsibilities?: string[];
  achievements?: string[];
  bulletPoints?: string[]; // fallback
}

export default function ExperienceCard({ title, company, period, completedWorks = [], team, responsibilities = [], achievements = [], bulletPoints = [] }: ExperienceCardProps) {
  return (
    <div className="bg-gray-800 p-4 md:p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-baseline justify-between">
        <h4 className="text-lg md:text-2xl font-semibold text-blue-400">{title}</h4>
        {period && <span className="text-sm text-gray-400">{period}</span>}
      </div>
      {company && <p className="text-gray-400 mb-3 md:mb-4">{company}</p>}

      {team && (
        <div className="mb-3">
          <div className="text-sm text-gray-400 mb-1">Team:</div>
          <div className="text-gray-300 text-sm">{team}</div>
        </div>
      )}

      {completedWorks.length > 0 && (
        <div className="mb-3">
          <div className="text-sm text-gray-400 mb-1">Completed works:</div>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
            {completedWorks.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </div>
      )}

      {responsibilities.length > 0 && (
        <div className="mb-3">
          <div className="text-sm text-gray-400 mb-1">Responsibilities:</div>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
            {responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}

      {achievements.length > 0 && (
        <div className="mb-3">
          <div className="text-sm text-gray-400 mb-1">Achievements:</div>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
            {achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      )}

      {bulletPoints.length > 0 && (
        <div>
          <div className="text-sm text-gray-400 mb-1">Other:</div>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
            {bulletPoints.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}