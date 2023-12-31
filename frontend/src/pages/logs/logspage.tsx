import { axiosPrivate } from 'api/axios';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface ILog {
  level?: string;
  message: string;
}
const getLogs = async () => {
  try {
    const result = await axiosPrivate.get('logs');
    return result?.data;
  } catch (e) {
    toast.error('Failed get logs');
  }
};
const LogsPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [logs, setLogs] = useState<ILog[]>();
  const navigate = useNavigate();

  const updateLogs = async () => {
    const result = await getLogs();
    if (result) {
      setLogs(result);
    }
  };
  useEffect(() => {
    updateLogs();
  }, []);
  return (
    <div>
      <Button
        className="absolute right-[5%] top-[5%] text-gray-100"
        onClick={() => navigate('/')}
      >
        Go back
      </Button>
      <div className="flex flex-col w-full h-full items-center mt-[10%] mb-[15%]">
        {logs?.map((log, index) => {
          return (
            <div key={index} className="flex">
              {log.level}
              {log.message}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogsPage;
