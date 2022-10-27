import React from 'react';
import { Icon, Grid, GridItem, ToastPreloader } from 'zmp-framework/react';

const AppItems = () => {
  const [toastLoading, setToastLoading] = React.useState(false);
  const items = [
    { icon: 'zi-chat-solid', label: ' FreeShip' },
    { icon: 'zi-clock-1-solid', label: 'San ' },
    { icon: 'zi-poll-solid', label: 'Top ' },
    { icon: 'zi-reminder-solid', label: 'Nhan ' },
    { icon: 'zi-star-solid', label: 'Deal ' },
    
   
  ]

  const openToastLoading = () => {
    setToastLoading(true);
    setTimeout(() => {
      setToastLoading(false);
    }, 2000);
  };

  return (
    <div>
      <ToastPreloader visible={toastLoading} text="Loading..." />
      <Grid noBorder columns={5}>
        {items.map(item => (
          <GridItem
            label={item.label}
            style={{ fontSize:"8pt", width: "auto", justifyContent: "center", justifyItems:"center" }}
            key={item.icon}
            icon={<Icon zmp={item.icon as any} />}
            onClick={openToastLoading}
          />
        ))}
      </Grid>
    </div>
  )
}

AppItems.displayName = 'zmp-app-items'

export default AppItems