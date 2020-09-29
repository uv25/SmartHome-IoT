import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, Button, Text, View, Image} from 'react-native';
import * as firebase from 'firebase';
import ToggleSwitch from 'toggle-switch-react-native'

export default class Profile extends Component<Props> {
  static navigationOptions = {
    title: 'Controller',
  };

  constructor(props) {
    super(props);
    const me = this;
    const { navigation } = this.props;
    user_name = navigation.getParam('userName');
    //user_name.indexOf("@");
    user_name = user_name.slice(0, user_name.indexOf("@"));
    //userPath = "/WORKING/" + "vohraudit25";
    //var relayState = "1111";

    this.state = {
      showText: true,
      r1,
      r2,
      r3,
      r4,
      relayState: "1111",
      userPath: "/WORKING/" + user_name,
    }
    //this.initRelay = this.initRelay.bind(this);

    // var userRef = firebase.database().ref("/WORKING/" + user_name);
    // userRef.on('value', function(snapshot) {
    //
    //   return me.initRelay(snapshot.val());
    // });

    //this.listenUserMobile();
    firebase.database().ref(this.state.userPath).on('value', (snapshot) => {

        var mobile = "";

        if (snapshot.val()) {
            mobile = snapshot.val()  //.mobile
            console.warn("before " + mobile);
            this.state.relayState = mobile;
            console.warn("after" + this.state.relayState);

            if(this.state.relayState.charAt(0) == "1")
            {
              console.warn("configure R1: true");
              this.setState({r1: true});
            }
            else {
              console.warn("configure R1: false");
              this.setState({r1: false});
            }
            //console.warn("r1: " + this.state.r1);

            if(this.state.relayState.charAt(1) == "1")
            {
              console.warn("configure R2: true");
              this.setState({r2: true});
            }
            else {
              console.warn("configure R2: false");
              this.setState({r2: false});
            }

            if(this.state.relayState.charAt(2) == "1")
            {
              //console.warn("inside true");
              this.setState({r3: true});
            }
            else {
              //console.warn("inside false");
              this.setState({r3: false});
            }

            if(this.state.relayState.charAt(3) == "1")
            {
              //console.warn("inside true");
              this.setState({r4: true});
            }
            else {
              //console.warn("inside false");
              this.setState({r4: false});
            }
        }

        //callback()
    });
  }

  render() {
    const {r1} = this.state.r1;
    const {r2} = this.state.r2;
    const {r3} = this.state.r3;
    const {r4} = this.state.r4;
    //const r4Val = r4;

    return (
      <View style={styles.container}>

        <View style={styles.subContainer}>
            <ToggleSwitch
              isOn={this.state.r1}
              onColor="green"
              offColor="red"
              label="Relay 1"
              labelStyle={{ color: "black", fontWeight: "900" }}
              //size="large"
              //onToggle={isOn => console.warn("changed to : ", isOn)}
              onValueChange = {this.toggleSwitch}
              //onToggle={() => this.switchState("vohraudit25", 1111)}
              onToggle = {() => this.relay_1()}
            />
          <ToggleSwitch
              isOn={this.state.r2}
              onColor="green"
              offColor="red"
              label="Relay 2"
              labelStyle={{ color: "black", fontWeight: "900" }}
              //size="large"
              //onToggle={isOn => console.warn("changed to : ", isOn)}
              //onToggle={() => this.switchState("vohraudit25", 1111)}
              onToggle = {() => this.relay_2()}
            />
        </View>

        <View style={styles.subContainer2}>
            <ToggleSwitch
              isOn={this.state.r3}
              onColor="green"
              offColor="red"
              label="Relay 3"
              labelStyle={{ color: "black", fontWeight: "900" }}
              //size="large"
              //onToggle={isOn => console.warn("changed to : ", isOn)}
              // onToggle={() => (
              //   this.setState(previousState => (
              //     { r3: !previousState.r3 }
              //   ))
              // )}
              onToggle = {() => this.relay_3()}
              //onValueChange = {this.toggleSwitch}
            />
          <ToggleSwitch
              isOn={this.state.r4}
              //value = {this.state.r4}
              onColor="green"
              offColor="red"
              label="Relay 4"
              labelStyle={{ color: "black", fontWeight: "900" }}
              //size="large"
              //onValueChange = {this.toggleSwitch}
              //onToggle={isOn => console.warn("changed to : ", isOn)}
              onToggle={() => this.relay_4()}
            />
          </View>
        <Text
          //title="    R1    "
          //onPress={() => this.switchState("alphaAlpha", 1111)}
        />
      </View>
    );
  }

  // switchState(userId, relayState){
  //   let userPath = "/WORKING/" + userId;
  //
  //   return firebase.database().ref(userPath).set(relayState)
  // }

  static initRelay(val2) {
    console.warn(val2);
  }

  relay_1(value) {
    console.warn("switching state for relay 1");
    //console.warn(this.r4);
    //this.setState({r4: value})
    // this.setState(previousState => (
    //     { r4: !previousState.r4 }
    //   ));
    //console.warn(this.r4);
    if(this.state.r1 == true)
    {
      console.warn("state was true");

      let temp = this.state.relayState;
      this.state.relayState = "0" + temp.charAt(1) + temp.charAt(2) + temp.charAt(3);
      firebase.database().ref(this.state.userPath).set(this.state.relayState);
      this.setState({r1: false});
    }
    else
    {
      console.warn("state was false");

      let temp = this.state.relayState;
      this.state.relayState = "1" + temp.charAt(1) + temp.charAt(2) + temp.charAt(3);
      firebase.database().ref(this.state.userPath).set(this.state.relayState);
      this.setState({r1: true});
    }
  }

  relay_2(value) {
    console.warn("switching state for relay 2");
    //console.warn(this.r4);
    //this.setState({r4: value})
    // this.setState(previousState => (
    //     { r4: !previousState.r4 }
    //   ));
    //console.warn(this.r4);
    if(this.state.r2 == true)
    {
      console.warn("state was true");

      let temp = this.state.relayState;
      this.state.relayState = temp.charAt(0) + "0" + temp.charAt(2) + temp.charAt(3);
      firebase.database().ref(this.state.userPath).set(this.state.relayState);
      this.setState({r2: false});
    }
    else
    {
      console.warn("state was false");

      let temp = this.state.relayState;
      this.state.relayState = temp.charAt(0) + "1" + temp.charAt(2) + temp.charAt(3);
      firebase.database().ref(this.state.userPath).set(this.state.relayState);
      this.setState({r2: true});
    }
  }

  relay_3(value) {
    console.warn("switching state for relay 3");
    //console.warn(this.r4);
    //this.setState({r4: value})
    // this.setState(previousState => (
    //     { r4: !previousState.r4 }
    //   ));
    //console.warn(this.r4);
    if(this.state.r3 == true)
    {
      console.warn("state was true");

      let temp = this.state.relayState;
      this.state.relayState = temp.charAt(0) + temp.charAt(1) + "0" + temp.charAt(3);
      firebase.database().ref(this.state.userPath).set(this.state.relayState);
      this.setState({r3: false});
    }
    else
    {
      console.warn("state was false");

      let temp = this.state.relayState;
      this.state.relayState = temp.charAt(0) + temp.charAt(1) + "1" + temp.charAt(3);
      firebase.database().ref(this.state.userPath).set(this.state.relayState);
      this.setState({r3: true});
    }
  }

  relay_4(value) {
    console.warn("switching state for relay 4");
    //console.warn(this.r4);
    //this.setState({r4: value})
    // this.setState(previousState => (
    //     { r4: !previousState.r4 }
    //   ));
    //console.warn(this.r4);
    if(this.state.r4 == true)
    {
      console.warn("state was true");

      let temp = this.state.relayState;
      this.state.relayState = temp.charAt(0) + temp.charAt(1) + temp.charAt(2) + "0";
      firebase.database().ref(this.state.userPath).set(this.state.relayState);
      this.setState({r4: false});
    }
    else
    {
      console.warn("state was false");

      let temp = this.state.relayState;
      this.state.relayState = temp.charAt(0) + temp.charAt(1) + temp.charAt(2) + "1";
      firebase.database().ref(this.state.userPath).set(this.state.relayState);
      this.setState({r4: true});
    }
  }

  toggleSwitch = (value) => {
      //onValueChange of the switch this function will be called
      this.setState({r4: value})
      //state changes according to switch
      //which will result in re-render the text
   }

   static listenUserMobile(userId, callback) {

        //let this.state.userPath = "/user/" + userId + "/details";
        console.warn("inside linstener");
        firebase.database().ref(this.state.userPath).on('value', (snapshot) => {

            var mobile = "";

            if (snapshot.val()) {
                mobile = snapshot.val()  //.mobile
                console.warn(mobile);
                this.state.relayState = mobile;
            }

            callback()
        });
    }
} // class end


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',

  },
  subContainer: {
    flex: 1,
    flexDirection: 'row' ,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    marginTop: 20,
  },
  subContainer2: {
    flex: 5,
    flexDirection: 'row' ,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  fields: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
