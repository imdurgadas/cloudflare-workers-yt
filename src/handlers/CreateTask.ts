interface CreateTaskDto {
  id: string;
  title: string;
  description: string;
}

const CreateTask = async (request: Request) => {
  const body: CreateTaskDto = await request.json();
  return new Response(JSON.stringify(body), { status: 201 });
};

export default CreateTask;
