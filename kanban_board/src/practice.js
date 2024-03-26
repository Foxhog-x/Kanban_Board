const data = [
  { user_id: 3, username: "see_me" },
  { user_id: 5, username: "see_me" },
];

const mapdata = data.map((assignee) => [assignee.user_id]);
console.log(mapdata);
