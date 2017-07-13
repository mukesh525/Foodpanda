<BottomNavigation.Action
  key="Home"
  icon="clear"
  label="Home"
  backgroundColor = "#000"
  style={{ container: { minWidth: null } }}
  onPress={() => {
    this.setState({ active: 'Home', key:'home', });
  }}
/>
<BottomNavigation.Action
  key="Menu"
  icon="gps-fixed"
  label="Menu"
  style={{ container: { minWidth: null , flexShrink:2} }}
  onPress={() => this.setState({ active: 'Menu', key:'menu', })}
/>

<BottomNavigation.Action
  key="Notify"
  icon="games"
  label="Notify"
  style={{ container: { minWidth: null } }}
  onPress={() => this.setState({ active: 'Notify', key:'notify', })}
/>
<BottomNavigation.Action
  key="Order"
  icon="chat"
  label="Order"
  style={{ container: { minWidth: null },backgroundColor:"#000" }}
  onPress={() => this.setState({ active: 'Order', key:'order', })}
/>

</BottomNavigation>
