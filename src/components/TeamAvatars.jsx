const TeamAvatars = () => {
  const dummyAvatars = [
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=4",
    "https://i.pravatar.cc/150?img=5",
  ];

  return (
    <div className="flex flex-wrap -space-x-2">
      {dummyAvatars.map((avatar, index) => (
        <div key={index} className="avatar h-8 w-8 hover:z-10">
          <img
            className="rounded-xl ring ring-white dark:ring-navy-700"
            src={avatar}
            alt={`Team member ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default TeamAvatars;