import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_13_323} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/505e/d2ee/e625e0c28061593cc24ac681737db21a"
        }}
        style={styles.ImageBackground_13_324}
      />
      <View style={styles.View_13_325}>
        <Text style={styles.Text_13_325}>Previews</Text>
      </View>
      <View style={styles.View_13_326}>
        <Text style={styles.Text_13_326}>Continue Watching for Emenalo</Text>
      </View>
      <View style={styles.View_13_327}>
        <View style={styles.View_13_328} />
        <View style={styles.View_13_329}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dba/4f61/4d8ce45de9895085473c41a9f0792b5b"
            }}
            style={styles.ImageBackground_13_330}
          />
          <View style={styles.View_13_333}>
            <Text style={styles.Text_13_333}>My List</Text>
          </View>
        </View>
        <View style={styles.View_13_334}>
          <View style={styles.View_13_335}>
            <View style={styles.View_13_336}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1446/9af6/b378939ec327b601b71baa9b783cb688"
                }}
                style={styles.ImageBackground_13_337}
              />
            </View>
            <View style={styles.View_13_341}>
              <Text style={styles.Text_13_341}>Info</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_13_342}>
        <Text style={styles.Text_13_342}>#2 in Nigeria Today</Text>
      </View>
      <View style={styles.View_13_343}>
        <View style={styles.View_13_344}>
          <Text style={styles.Text_13_344}>Play</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae6/d465/15cb1f36741397182160db8bdfc389a3"
          }}
          style={styles.ImageBackground_13_345}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb00/9b1d/360eb206d8ae603671a6efd34d65961d"
        }}
        style={styles.ImageBackground_13_346}
      />
      <View style={styles.View_13_352}>
        <View style={styles.View_13_353}>
          <View style={styles.View_13_354}>
            <Text style={styles.Text_13_354}>10</Text>
          </View>
          <View style={styles.View_13_355}>
            <Text style={styles.Text_13_355}>TOP</Text>
          </View>
        </View>
        <View style={styles.View_13_356} />
      </View>
      <View style={styles.View_13_357}>
        <View style={styles.View_13_358}>
          <Text style={styles.Text_13_358}>Popular on Netflix</Text>
        </View>
        <View style={styles.View_13_359}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/937c/b1e9/9d2677321a22093370a82c30b4445470"
            }}
            style={styles.ImageBackground_13_360}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b4f/929e/eb8772a00930fa9652fd4405ed62cb94"
            }}
            style={styles.ImageBackground_13_361}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95a7/d897/23102d4cc9916f7823c124ea62a1f9d7"
            }}
            style={styles.ImageBackground_13_362}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/732c/4cbd/dd3d2ace9217bcaab24ef3b92b93f76d"
            }}
            style={styles.ImageBackground_13_363}
          />
        </View>
      </View>
      <View style={styles.View_13_364}>
        <View style={styles.View_13_365}>
          <View style={styles.View_13_366}>
            <Text style={styles.Text_13_366}>Trending Now</Text>
          </View>
          <View style={styles.View_13_367}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a204/4f83/6954cc0cc7c2ff269df0af72b1d71bc2"
              }}
              style={styles.ImageBackground_13_368}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae0f/8c81/381473030823f116ab65907385f53c61"
              }}
              style={styles.ImageBackground_13_369}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5f1/0d59/cefae1b711ab8045718ad7bab81194da"
              }}
              style={styles.ImageBackground_13_370}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b62f/d3ae/a55d4008a331c3bd2faa314885341a57"
              }}
              style={styles.ImageBackground_13_371}
            />
          </View>
        </View>
        <View style={styles.View_13_372}>
          <View style={styles.View_13_373}>
            <Text style={styles.Text_13_373}>Top 10 in Nigeria Today</Text>
          </View>
          <View style={styles.View_13_374}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d653/9698/a40d4cb2dec1358359370149cf7207ac"
              }}
              style={styles.ImageBackground_13_375}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b797/6e1e/09f5e806af6e22949b42dd54276d6da3"
              }}
              style={styles.ImageBackground_13_376}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1881/d893/27fcb6e2087bd104c92a420c8b3fcd86"
              }}
              style={styles.ImageBackground_13_377}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0851/cf43/f3773adb0739f68a50f2b6ac5a809bc0"
              }}
              style={styles.ImageBackground_13_378}
            />
          </View>
        </View>
        <View style={styles.View_13_379}>
          <View style={styles.View_13_380}>
            <Text style={styles.Text_13_380}>My List</Text>
          </View>
          <View style={styles.View_13_381}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9766/5944/0c5cea0ba61203b67948b018ed16a79b"
              }}
              style={styles.ImageBackground_13_382}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/448e/c1a4/33159025f45149c0398b702b620a1d6e"
              }}
              style={styles.ImageBackground_13_383}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4020/bfc2/c03978acdbc0277098806ab0ab6e737b"
              }}
              style={styles.ImageBackground_13_384}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b36/bf6c/4e12697f817ad74885b333eec5b85f4a"
              }}
              style={styles.ImageBackground_13_385}
            />
          </View>
        </View>
        <View style={styles.View_13_386}>
          <View style={styles.View_13_387}>
            <Text style={styles.Text_13_387}>African Movies</Text>
          </View>
          <View style={styles.View_13_388}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbda/b7a9/2119389192f8ec5fbf57f49c5df1d914"
              }}
              style={styles.ImageBackground_13_389}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c867/82aa/ac118e61ef3ef2f2e5ab899b24ed8bb4"
              }}
              style={styles.ImageBackground_13_390}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fbd/a99a/0cf540117884dd289b93343f4ab68dab"
              }}
              style={styles.ImageBackground_13_391}
            />
            <View style={styles.View_13_392} />
          </View>
        </View>
        <View style={styles.View_13_393}>
          <View style={styles.View_13_394}>
            <Text style={styles.Text_13_394}>Netflix Originals</Text>
          </View>
          <View style={styles.View_13_395}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f0a/2d33/2ee36bdd31fde8d3c2f868394258550b"
              }}
              style={styles.ImageBackground_13_396}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2b2/7227/c7989b22718c8b34f6ed74f9de74c1ad"
              }}
              style={styles.ImageBackground_13_397}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89d0/cd1c/cdf6b27683959771d537990df73c1902"
              }}
              style={styles.ImageBackground_13_398}
            />
          </View>
        </View>
        <View style={styles.View_13_399}>
          <View style={styles.View_13_400}>
            <Text style={styles.Text_13_400}>Nollywood Movies &amp; TV</Text>
          </View>
          <View style={styles.View_13_401}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/998e/b2bc/3b47248a1a07165b816251e5e65dcf63"
              }}
              style={styles.ImageBackground_13_402}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f39d/7b1a/e992d85182f7f959ba4e1d116b7083f3"
              }}
              style={styles.ImageBackground_13_403}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc3a/6cf9/b692f67fb2c4a8e7658b9f9d74607b6c"
              }}
              style={styles.ImageBackground_13_404}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d7/7f58/2dba7929bfff58dcf2d514a8d1f9ea3f"
              }}
              style={styles.ImageBackground_13_405}
            />
          </View>
        </View>
        <View style={styles.View_13_406}>
          <View style={styles.View_13_407}>
            <Text style={styles.Text_13_407}>Watch It Again</Text>
          </View>
          <View style={styles.View_13_408}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b34a/8393/4bd39f5c0847462644890ac788a1a6e9"
              }}
              style={styles.ImageBackground_13_409}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e54/fe2f/29502c5c4b88c652ee756bca28c74666"
              }}
              style={styles.ImageBackground_13_410}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90f6/8fad/848c4f9bf97096702a08a180cb9c7b8c"
              }}
              style={styles.ImageBackground_13_411}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43af/529f/232170b837f34a8040e36158d65c7635"
              }}
              style={styles.ImageBackground_13_412}
            />
          </View>
        </View>
        <View style={styles.View_13_413}>
          <View style={styles.View_13_414}>
            <Text style={styles.Text_13_414}>New Releases</Text>
          </View>
          <View style={styles.View_13_415}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dde5/7614/9a814d8198a10e7fafbd167c97a9d554"
              }}
              style={styles.ImageBackground_13_416}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3104/0b56/bbf2f9b082ce1061dadea0f423406f19"
              }}
              style={styles.ImageBackground_13_417}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e68/7f75/00ae602da59860aab1ae770d494cb789"
              }}
              style={styles.ImageBackground_13_418}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1339/6727/fbb57215a781b1808e5c0b10adf79332"
              }}
              style={styles.ImageBackground_13_419}
            />
          </View>
        </View>
        <View style={styles.View_13_420}>
          <View style={styles.View_13_421}>
            <Text style={styles.Text_13_421}>TV Thrillers &amp; Mysteries</Text>
          </View>
          <View style={styles.View_13_422}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3321/d511/af4e0806ae1501ae288a3fdaaec8ebfc"
              }}
              style={styles.ImageBackground_13_423}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fdd/4d41/6d78a7cbbf6b724573175b9107f26b31"
              }}
              style={styles.ImageBackground_13_424}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0293/fb71/a647b8a9845b956463321ac63eedd8b4"
              }}
              style={styles.ImageBackground_13_425}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/395d/ccd4/6ef2ced891f705a918af1732cfc15c1a"
              }}
              style={styles.ImageBackground_13_426}
            />
          </View>
        </View>
        <View style={styles.View_13_427}>
          <View style={styles.View_13_428}>
            <Text style={styles.Text_13_428}>US TV Shows</Text>
          </View>
          <View style={styles.View_13_429}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7802/1f6f/9048f7ec89bf016b6f2a2c9269ca3862"
              }}
              style={styles.ImageBackground_13_430}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d278/595a/d62fe1e0b184efc1d88026f71a29d258"
              }}
              style={styles.ImageBackground_13_431}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f465/0fdd/56af439a7042431af09cb5e5ae143444"
              }}
              style={styles.ImageBackground_13_432}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd48/33c3/4a5dd656edf1a6c5f07a4ab1d9e3a72c"
              }}
              style={styles.ImageBackground_13_433}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_13_434}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ae4/6943/528a53672130e66156e9e2d138e16506"
          }}
          style={styles.ImageBackground_13_435}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e68/08fb/99b79771df1180279983696d12334bc9"
          }}
          style={styles.ImageBackground_13_436}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eef/9427/b2fcb08cbf7cb59c542d294f54ed7548"
          }}
          style={styles.ImageBackground_13_437}
        />
        <View style={styles.View_13_438}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2624/7e7f/86964f866e77f77c3ccabaece8159f5b"
            }}
            style={styles.ImageBackground_13_439}
          />
          <View style={styles.View_13_440}>
            <View style={styles.View_13_441} />
            <View style={styles.View_13_442}>
              <View style={styles.View_13_443} />
              <View style={styles.View_13_444}>
                <View style={styles.View_13_445}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1446/9af6/b378939ec327b601b71baa9b783cb688"
                    }}
                    style={styles.ImageBackground_13_446}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                  }}
                  style={styles.ImageBackground_13_450}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_13_452}>
        <View style={styles.View_13_453} />
        <View style={styles.View_13_454}>
          <View style={styles.View_13_455} />
          <View style={styles.View_13_456}>
            <View style={styles.View_13_457}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1446/9af6/b378939ec327b601b71baa9b783cb688"
                }}
                style={styles.ImageBackground_13_458}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
              }}
              style={styles.ImageBackground_13_462}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_13_464}>
        <View style={styles.View_13_465} />
        <View style={styles.View_13_466}>
          <View style={styles.View_13_467} />
          <View style={styles.View_13_468}>
            <View style={styles.View_13_469}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1446/9af6/b378939ec327b601b71baa9b783cb688"
                }}
                style={styles.ImageBackground_13_470}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
              }}
              style={styles.ImageBackground_13_474}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_13_476}>
        <View style={styles.View_13_477} />
        <View style={styles.View_13_478}>
          <View style={styles.View_13_479} />
          <View style={styles.View_13_480}>
            <View style={styles.View_13_481}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1446/9af6/b378939ec327b601b71baa9b783cb688"
                }}
                style={styles.ImageBackground_13_482}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
              }}
              style={styles.ImageBackground_13_486}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_13_488}>
        <View style={styles.View_13_489}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/4f69/160be67fc5664ca667ef0479a1fb47cf"
            }}
            style={styles.ImageBackground_13_490}
          />
        </View>
        <View style={styles.View_13_500}>
          <View style={styles.View_13_501}>
            <View style={styles.View_13_502}>
              <Text style={styles.Text_13_502}>Movies</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb85/c90a/fa2611e3c1a937f8402e277ae629b925"
              }}
              style={styles.ImageBackground_13_503}
            />
          </View>
          <View style={styles.View_13_504}>
            <View style={styles.View_13_505}>
              <Text style={styles.Text_13_505}>All Genres</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57d8/829e/fe520ca8058b26eb334e3a4c0c8ac0f2"
              }}
              style={styles.ImageBackground_13_506}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_13_507}>
        <View style={styles.View_13_508}>
          <View style={styles.View_13_509} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_13_510}
          />
          <View style={styles.View_13_511} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
          }}
          style={styles.ImageBackground_13_512}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_13_516}
        />
        <View style={styles.View_13_521}>
          <View style={styles.View_13_522}>
            <Text style={styles.Text_13_522}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_13_523}>
        <View style={styles.View_13_524} />
        <View style={styles.View_13_525} />
      </View>
      <View style={styles.View_13_526}>
        <View style={styles.View_13_527} />
        <View style={styles.View_13_528}>
          <View style={styles.View_13_529}>
            <View style={styles.View_13_530}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33d5/bf2a/2135b370fc0433b1be2dcea5c7d624df"
                }}
                style={styles.ImageBackground_13_531}
              />
            </View>
            <View style={styles.View_13_534}>
              <Text style={styles.Text_13_534}>Search</Text>
            </View>
          </View>
          <View style={styles.View_13_535}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cee/f3d3/d170c48fa86240a9bd43e1fe6c5ecd3a"
              }}
              style={styles.ImageBackground_13_536}
            />
            <View style={styles.View_13_537}>
              <Text style={styles.Text_13_537}>Coming Soon</Text>
            </View>
          </View>
          <View style={styles.View_13_538}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f88/138a/c8b4fcf8bdf3d41bcc9ca77fef55ac64"
              }}
              style={styles.ImageBackground_13_539}
            />
            <View style={styles.View_13_540}>
              <Text style={styles.Text_13_540}>More</Text>
            </View>
          </View>
          <View style={styles.View_13_541}>
            <View style={styles.View_13_542}>
              <Text style={styles.Text_13_542}>Home</Text>
            </View>
            <View style={styles.View_13_543}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68d4/a8cc/e03d4e8538fe5d6aa1aafc68c5aad916"
                }}
                style={styles.ImageBackground_13_544}
              />
            </View>
          </View>
          <View style={styles.View_13_550}>
            <View style={styles.View_13_551}>
              <Text style={styles.Text_13_551}>Downloads</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb7a/62b0/660fb6081af0f38f95109062c70546cb"
              }}
              style={styles.ImageBackground_13_552}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_13_554}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7071/7408/2f77d7edc9ec3a3404a44bc7083df27f"
          }}
          style={styles.ImageBackground_I13_554_6_497}
        />
        <View style={styles.View_I13_554_6_496}>
          <Text style={styles.Text_I13_554_6_496}>4</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_13_323: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("459.69945355191254%"),
    minHeight: hp("459.69945355191254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_13_324: {
    width: wp("113.07902018229166%"),
    minWidth: wp("113.07902018229166%"),
    height: hp("56.69398907103825%"),
    minHeight: hp("56.69398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.539518229166667%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_13_325: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("70.49180327868852%")
  },
  Text_13_325: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21.74821662902832,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07339449226856232,
    textTransform: "none"
  },
  View_13_326: {
    width: wp("79.46666666666667%"),
    minWidth: wp("79.46666666666667%"),
    minHeight: hp("2.137027933297913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("94.12568306010928%")
  },
  Text_13_326: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_13_327: {
    width: wp("69.06666666666666%"),
    minWidth: wp("69.06666666666666%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%"),
    top: hp("58.46994535519126%")
  },
  View_13_328: {
    width: wp("29.5%"),
    minWidth: wp("29.5%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 5.625,
    borderTopRightRadius: 5.625,
    borderBottomLeftRadius: 5.625,
    borderBottomRightRadius: 5.625
  },
  View_13_329: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_13_330: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%")
  },
  View_13_333: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448087%")
  },
  Text_13_333: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.64159107208252,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04079999774694443,
    textTransform: "none"
  },
  View_13_334: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.66666666666668%"),
    top: hp("0%")
  },
  View_13_335: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_336: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_337: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  View_13_341: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666515%"),
    top: hp("3.415300546448087%")
  },
  Text_13_341: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.64159107208252,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04079999774694443,
    textTransform: "none"
  },
  View_13_342: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("54.23497267759563%")
  },
  Text_13_342: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.722997665405273,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.0410434752702713,
    textTransform: "none"
  },
  View_13_343: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.6%"),
    top: hp("59.56284153005464%")
  },
  View_13_344: {
    width: wp("10.4%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("0%")
  },
  Text_13_344: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16.462387084960938,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06119999662041664,
    textTransform: "none"
  },
  ImageBackground_13_345: {
    width: wp("4.8%"),
    height: hp("2.9508197242444982%"),
    minHeight: hp("2.9508197242444982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_13_346: {
    width: wp("143.46666666666667%"),
    minWidth: wp("143.46666666666667%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("76.36612021857924%")
  },
  View_13_352: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.06666666666667%"),
    top: hp("54.644808743169406%")
  },
  View_13_353: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    height: hp("1.8442624253653437%"),
    minHeight: hp("1.8442624253653437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0.06830601092894995%")
  },
  View_13_354: {
    width: wp("2.2666666666666666%"),
    minWidth: wp("2.2666666666666666%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1333333333333293%"),
    top: hp("0.4781420765027349%")
  },
  Text_13_354: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5.861498832702637,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.02052173763513565,
    textTransform: "none"
  },
  View_13_355: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    minHeight: hp("0.9562840878637763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_13_355: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 3.3600001335144043,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.02052173763513565,
    textTransform: "none"
  },
  View_13_356: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_13_357: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("126.50273224043715%")
  },
  View_13_358: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_13_358: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_13_359: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%")
  },
  ImageBackground_13_360: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_361: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_362: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_363: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_364: {
    width: wp("126.66666666666666%"),
    minWidth: wp("126.66666666666666%"),
    height: hp("305.7377049180328%"),
    minHeight: hp("305.7377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("155.60109289617486%")
  },
  View_13_365: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_366: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_13_366: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_13_367: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%")
  },
  ImageBackground_13_368: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_369: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_370: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_371: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_372: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.098360655737707%")
  },
  View_13_373: {
    width: wp("57.86666666666667%"),
    minWidth: wp("57.86666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_13_373: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_13_374: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%")
  },
  ImageBackground_13_375: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_376: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_377: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_378: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_379: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.19672131147544%")
  },
  View_13_380: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_13_380: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_13_381: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737679%")
  },
  ImageBackground_13_382: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_383: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_384: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_385: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_386: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("87.29508196721312%")
  },
  View_13_387: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_13_387: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_13_388: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%")
  },
  ImageBackground_13_389: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_390: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_391: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_392: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_393: {
    width: wp("126.66666666666666%"),
    minWidth: wp("126.66666666666666%"),
    height: hp("38.3879781420765%"),
    minHeight: hp("38.3879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("145.4918032786885%")
  },
  View_13_394: {
    width: wp("43.51081949869792%"),
    minWidth: wp("43.51081949869792%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1450520833333329%"),
    top: hp("0%")
  },
  Text_13_394: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_13_395: {
    width: wp("126.66666666666666%"),
    minWidth: wp("126.66666666666666%"),
    height: hp("34.2896174863388%"),
    minHeight: hp("34.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737736%")
  },
  ImageBackground_13_396: {
    width: wp("41.07720947265625%"),
    minWidth: wp("41.07720947265625%"),
    height: hp("34.2896174863388%"),
    minHeight: hp("34.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_397: {
    width: wp("41.07720947265625%"),
    minWidth: wp("41.07720947265625%"),
    height: hp("34.2896174863388%"),
    minHeight: hp("34.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.58945312499999%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_398: {
    width: wp("41.07720947265625%"),
    minWidth: wp("41.07720947265625%"),
    height: hp("34.2896174863388%"),
    minHeight: hp("34.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.794726562499996%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_399: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("116.39344262295083%")
  },
  View_13_400: {
    width: wp("59.46666666666667%"),
    minWidth: wp("59.46666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_13_400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_13_401: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737679%")
  },
  ImageBackground_13_402: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_403: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_404: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_405: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_406: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("192.34972677595624%")
  },
  View_13_407: {
    width: wp("36.53333333333333%"),
    minWidth: wp("36.53333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_13_407: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_13_408: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.0983606557377925%")
  },
  ImageBackground_13_409: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_410: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_411: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_412: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_413: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("221.44808743169403%")
  },
  View_13_414: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_13_414: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_13_415: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737679%")
  },
  ImageBackground_13_416: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_417: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_418: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_419: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_420: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("250.54644808743166%")
  },
  View_13_421: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_13_421: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_13_422: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737736%")
  },
  ImageBackground_13_423: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_424: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_425: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_426: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_427: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("279.6448087431694%")
  },
  View_13_428: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_13_428: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_13_429: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737736%")
  },
  ImageBackground_13_430: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_431: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_432: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_433: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_434: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("99.31693989071039%")
  },
  ImageBackground_13_435: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_436: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_13_437: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_438: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_13_439: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_440: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.71584699453551%")
  },
  View_13_441: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 74, 74, 1)"
  },
  View_13_442: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  View_13_443: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_444: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("0.956284153005484%")
  },
  View_13_445: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_446: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%")
  },
  ImageBackground_13_450: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%")
  },
  View_13_452: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("118.0327868852459%")
  },
  View_13_453: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 74, 74, 1)"
  },
  View_13_454: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  View_13_455: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_456: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.956284153005484%")
  },
  View_13_457: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_458: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  ImageBackground_13_462: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666664%")
  },
  View_13_464: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.86666666666667%"),
    top: hp("118.0327868852459%")
  },
  View_13_465: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 74, 74, 1)"
  },
  View_13_466: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  View_13_467: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_468: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%"),
    top: hp("0.956284153005484%")
  },
  View_13_469: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_470: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%")
  },
  ImageBackground_13_474: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666671%")
  },
  View_13_476: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.2%"),
    top: hp("118.0327868852459%")
  },
  View_13_477: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 74, 74, 1)"
  },
  View_13_478: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  View_13_479: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_13_480: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999886%"),
    top: hp("0.956284153005484%")
  },
  View_13_481: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_482: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%")
  },
  ImageBackground_13_486: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666671%")
  },
  View_13_488: {
    width: wp("66.08001302083333%"),
    minWidth: wp("66.08001302083333%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("6.420765027322404%")
  },
  View_13_489: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_13_490: {
    width: wp("14.133333333333335%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_500: {
    width: wp("48.21334635416667%"),
    minWidth: wp("48.21334635416667%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("1.775956284153005%")
  },
  View_13_501: {
    width: wp("23.573307291666666%"),
    minWidth: wp("23.573307291666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_502: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_13_502: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.196807861328125,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.7622978687286377,
    textTransform: "none"
  },
  ImageBackground_13_503: {
    width: wp("3.8400004069010416%"),
    minWidth: wp("3.8400004069010416%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.73333333333333%"),
    top: hp("1.639344262295083%")
  },
  View_13_504: {
    width: wp("20.457356770833332%"),
    minWidth: wp("20.457356770833332%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.755989583333335%"),
    top: hp("0%")
  },
  View_13_505: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_13_505: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.199999809265137,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.7622978687286377,
    textTransform: "none"
  },
  ImageBackground_13_506: {
    width: wp("2.880000305175781%"),
    minWidth: wp("2.880000305175781%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.577343749999997%"),
    top: hp("1.7759562841530059%")
  },
  View_13_507: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_508: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.367947270961407%")
  },
  View_13_509: {
    width: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_13_510: {
    width: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009051880549862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%")
  },
  View_13_511: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_13_512: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_13_516: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413473494065915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_13_521: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_522: {
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475409%")
  },
  Text_13_522: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_13_523: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.33099699802086%"),
    minHeight: hp("4.33099699802086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.55737704918033%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    overflow: "hidden"
  },
  View_13_524: {
    width: wp("100%"),
    height: hp("4.33099699802086%"),
    top: hp("-0.12373793971995894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_13_525: {
    width: wp("32.36714884440104%"),
    height: hp("0.6187138661660784%"),
    minHeight: hp("0.6187138661660784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81640625%"),
    top: hp("2.4748588520320993%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_13_526: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100%")
  },
  View_13_527: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_13_528: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("1.0928961748633839%")
  },
  View_13_529: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333334%"),
    top: hp("0%")
  },
  View_13_530: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.533333333333335%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_531: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%")
  },
  View_13_534: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%")
  },
  Text_13_534: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_13_535: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.26666666666667%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_13_536: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("0%")
  },
  View_13_537: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%")
  },
  Text_13_537: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_13_538: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.73333333333333%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_13_539: {
    width: wp("5.599999491373698%"),
    minWidth: wp("5.599999491373698%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_540: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666515%"),
    top: hp("1.5027322404371546%")
  },
  Text_13_540: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_13_541: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_542: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%")
  },
  Text_13_542: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_13_543: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_544: {
    width: wp("5.333333333333334%"),
    height: hp("2.3224043715846996%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.533333333333335%")
  },
  View_13_550: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.333333333333336%"),
    top: hp("0%")
  },
  View_13_551: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%")
  },
  Text_13_551: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  ImageBackground_13_552: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%")
  },
  View_13_554: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333333%"),
    top: hp("100.95628415300546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I13_554_6_497: {
    flexGrow: 1,
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I13_554_6_496: {
    flexGrow: 1,
    width: wp("1.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333385%"),
    top: hp("0.6830601092896273%")
  },
  Text_I13_554_6_496: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_2: { height: 3409 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
