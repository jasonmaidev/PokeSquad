type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  sprites: {
    front_default: string;
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  types: [
    {
      slot: number;
      type: {
        name: string;
      };
    },
    {
      slot: number;
      type: {
        name: string;
      };
    }
  ];
};
