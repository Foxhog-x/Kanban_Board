export const clearCard = (setCardData) => {
  setCardData((prev) => {
    return {
      ...prev,
      column_id: "",
      title: "",
      description: "",
      start_date: "",
      due_date: "",
      assignee_id: "",
      priority: "",
      colorSchemes_id: "",
      department: "",
      status: "",
    };
  });
};
