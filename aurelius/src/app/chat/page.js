import Chat from "../../../container/chat/Chat";
import Prompt from "../../../container/chat/Prompt";
export default function Page() {
  const chatArray = [
    {
      type: "system",
      content: "Hello! I'm Claude, an AI assistant. How can I help you today?",
      timestamp: "2024-03-23T10:00:00Z",
      id: "msg_1",
    },
    {
      type: "user",
      content:
        "Can you help me write a Python script to analyze some sales data?",
      timestamp: "2024-03-23T10:01:23Z",
      id: "msg_2",
    },
    {
      type: "system",
      content:
        "I'd be happy to help you with that! Could you tell me what kind of analysis you'd like to perform on the sales data? For example, are you interested in trends, statistics, or specific calculations?",
      timestamp: "2024-03-23T10:01:45Z",
      id: "msg_3",
    },
    {
      type: "user",
      content:
        "I need to calculate monthly revenue growth and plot it on a graph",
      timestamp: "2024-03-23T10:02:30Z",
      id: "msg_4",
    },
    {
      type: "system",
      content:
        "I can help you create a script using pandas for data analysis and matplotlib for visualization. Would you like me to show you an example?",
      timestamp: "2024-03-23T10:02:55Z",
      id: "msg_5",
    },
    {
      type: "user",
      content: "Yes, please show me an example!",
      timestamp: "2024-03-23T10:03:15Z",
      id: "msg_6",
    },
    {
      type: "system",
      content:
        "Here's a simple script to get you started:\n\n```python\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Load your data\ndf = pd.read_csv('sales_data.csv')\n\n# Calculate monthly revenue growth\ndf['Revenue_Growth'] = df['Revenue'].pct_change() * 100\n\n# Create the plot\nplt.figure(figsize=(10, 6))\nplt.plot(df['Month'], df['Revenue_Growth'], marker='o')\nplt.title('Monthly Revenue Growth')\nplt.xlabel('Month')\nplt.ylabel('Growth (%)')\nplt.grid(True)\nplt.show()```\n\nWould you like me to explain how each part works?",
      timestamp: "2024-03-23T10:04:00Z",
      id: "msg_7",
    },
    {
      type: "user",
      content:
        "This looks great! How would I modify it to show quarterly data instead?",
      timestamp: "2024-03-23T10:05:30Z",
      id: "msg_8",
    },
  ];

  return (
    <div style={{}}>
      <Chat chatArray={chatArray} />
    </div>
  );
}
