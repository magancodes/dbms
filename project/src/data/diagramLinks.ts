export interface DiagramLink {
  id: string;
  title: string;
  description: string;
  link: string;
}

const diagramLinks: DiagramLink[] = [
  {
    id: 'er-diagram',
    title: 'OVERALL ER DIAGRAM',
    description: 'Complete entity relationship diagram of the database system',
    link: 'https://admirable-starburst-c87fd0.netlify.app/assets/er.svg', // Add your link here
  },
  {
    id: 'chat-er',
    title: 'CHAT INTERFACE ER DIAGRAM',
    description: 'Entity relationships for the chat interface subsystem',
    link: 'https://admirable-starburst-c87fd0.netlify.app/assets/er-chat.svg', // Add your link here
  },
  {
    id: 'bg-flowchart',
    title: 'BACKGROUND SERVICE FLOWCHART',
    description: 'Process flow of background services',
    link: 'https://admirable-starburst-c87fd0.netlify.app/assets/fc1-background-service-function-logic.svg', // Add your link here
  },
  {
    id: 'fastapi-flow',
    title: 'FASTAPI FLOW CHART',
    description: 'API endpoint architecture and data flow',
    link: 'https://admirable-starburst-c87fd0.netlify.app/assets/fc2-generic-fastAPI-GET-Request-handling.svg', // Add your link here
  },
  {
    id: 'bg-sequence',
    title: 'BACKGROUND SERVICE SEQUENCE DIAGRAM',
    description: 'Sequence of operations in background processing',
    link: 'https://admirable-starburst-c87fd0.netlify.app/assets/sd1-background-service-tracking-loop.svg', // Add your link here
  },
  {
    id: 'api-sequence',
    title: 'API FETCHING SEQUENCE DIAGRAM',
    description: 'Sequential flow of API data retrieval operations',
    link: 'https://admirable-starburst-c87fd0.netlify.app/assets/sd2-Fetching-Activities-via-API.svg', // Add your link here
  },
  {
    id: 'chatbot-sequence',
    title: 'CHATBOT REQUESTS SEQUENCE DIAGRAM',
    description: 'Request-response sequence for chatbot interactions',
    link: 'https://admirable-starburst-c87fd0.netlify.app/assets/sd3-chatbot-request-New-Chat.svg', // Add your link here
  },
  {
    id: 'uml',
    title: 'UML',
    description: 'Unified Modeling Language diagrams of the system',
    link: 'https://admirable-starburst-c87fd0.netlify.app/assets/uml.svg', // Add your link here
  },
];

export default diagramLinks;