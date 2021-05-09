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
      <View style={styles.View_109_0} />
      <View style={styles.View_113_303}>
        <View style={styles.View_113_304} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f41e/2a74/b53f7966190b44ac4e2cf651b20b1e74"
          }}
          style={styles.ImageBackground_113_305}
        />
        <View style={styles.View_113_306}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f67/db5d/b4c348a3ce948e2ae73c788c7443d312"
            }}
            style={styles.ImageBackground_113_307}
          />
          <View style={styles.View_113_317}>
            <Text style={styles.Text_113_317}>TV Shows</Text>
          </View>
          <View style={styles.View_113_318}>
            <Text style={styles.Text_113_318}>Movies</Text>
          </View>
          <View style={styles.View_113_319}>
            <Text style={styles.Text_113_319}>My List</Text>
          </View>
        </View>
        <View style={styles.View_113_320}>
          <Text style={styles.Text_113_320}>Previews</Text>
        </View>
        <View style={styles.View_113_321}>
          <Text style={styles.Text_113_321}>Continue Watching for Emenalo</Text>
        </View>
        <View style={styles.View_113_322}>
          <View style={styles.View_113_323} />
          <View style={styles.View_113_324}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba6c/19ac/6945141e3fe28d2a3fc23e8bea67a7c4"
              }}
              style={styles.ImageBackground_113_325}
            />
            <View style={styles.View_113_328}>
              <Text style={styles.Text_113_328}>My List</Text>
            </View>
          </View>
          <View style={styles.View_113_329}>
            <View style={styles.View_113_330}>
              <View style={styles.View_113_331}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9033/5598/3dfd12286811c646f9287142be952c1e"
                  }}
                  style={styles.ImageBackground_113_332}
                />
              </View>
              <View style={styles.View_113_336}>
                <Text style={styles.Text_113_336}>Info</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_113_337}>
          <Text style={styles.Text_113_337}>#2 in Nigeria Today</Text>
        </View>
        <View style={styles.View_113_338}>
          <View style={styles.View_113_339}>
            <Text style={styles.Text_113_339}>Play</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22fe/0c10/c59f9497505658a092642e626d8841c0"
            }}
            style={styles.ImageBackground_113_340}
          />
        </View>
        <View style={styles.View_113_341}>
          <View style={styles.View_113_342}>
            <View style={styles.View_113_343}>
              <Text style={styles.Text_113_343}>10</Text>
            </View>
            <View style={styles.View_113_344}>
              <Text style={styles.Text_113_344}>TOP</Text>
            </View>
          </View>
          <View style={styles.View_113_345} />
        </View>
        <View style={styles.View_113_346}>
          <View style={styles.View_113_347}>
            <Text style={styles.Text_113_347}>Popular on Netflix</Text>
          </View>
          <View style={styles.View_113_348}>
            <View style={styles.View_113_349}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/488e/4aa1/f11ec0bc769488687a2574b1b5916630"
                }}
                style={styles.ImageBackground_113_350}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e854/4e18/866450a4cec631b0dd543d2a5efad1ce"
                }}
                style={styles.ImageBackground_113_351}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cef9/6ca6/a31e3d48b95caa8698aaff163662bf92"
                }}
                style={styles.ImageBackground_113_352}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a216/1e25/64e2f1ffce6526bf112242502f6a07a0"
                }}
                style={styles.ImageBackground_113_353}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9c/46d2/cc3c2918b14f9f6a1d2d2503da8781f4"
                }}
                style={styles.ImageBackground_113_354}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_113_355}>
          <View style={styles.View_113_356}>
            <View style={styles.View_113_357}>
              <Text style={styles.Text_113_357}>Trending Now</Text>
            </View>
            <View style={styles.View_113_358}>
              <View style={styles.View_113_359}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d23/ca5c/1bf970d5a000d41af21ec1fca09aae10"
                  }}
                  style={styles.ImageBackground_113_360}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/232c/168f/3e6b0b83147c724408453706d786ce29"
                  }}
                  style={styles.ImageBackground_113_361}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d2/199c/e40bee5501e369890e19df8c43bfb9f1"
                  }}
                  style={styles.ImageBackground_113_362}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83a0/69a8/49816da29b5311d2fdbd128cb2a2c754"
                  }}
                  style={styles.ImageBackground_113_363}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d720/696a/3131b570f9495b9eb23bd94948191f7c"
                  }}
                  style={styles.ImageBackground_113_364}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_113_365}>
            <View style={styles.View_113_366}>
              <Text style={styles.Text_113_366}>Top 10 in Nigeria Today</Text>
            </View>
            <View style={styles.View_113_367}>
              <View style={styles.View_113_368}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14e2/affc/91302cd0a1622e118fa493793ca73122"
                  }}
                  style={styles.ImageBackground_113_369}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fcb/56a6/fa09fe30038134f85936069c58e4349d"
                  }}
                  style={styles.ImageBackground_113_370}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8c5/410e/61712ca235ec1fa8cc2aadf0a6dc0395"
                  }}
                  style={styles.ImageBackground_113_371}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e262/d607/1139bc62ea59c1c52b7c49e8c3581bfd"
                  }}
                  style={styles.ImageBackground_113_372}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d30/7560/b76c774c283ad73b9d1a94360290b88a"
                  }}
                  style={styles.ImageBackground_113_373}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_113_374}>
            <View style={styles.View_113_375}>
              <Text style={styles.Text_113_375}>My List</Text>
            </View>
            <View style={styles.View_113_376}>
              <View style={styles.View_113_377}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b944/06b9/e1e76a066fba6194a28df20846482342"
                  }}
                  style={styles.ImageBackground_113_378}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cea3/0920/324d9b853d1103913e4d4b7402f41ba1"
                  }}
                  style={styles.ImageBackground_113_379}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d2/fea4/e3c8f27e740a2c9fc7af484b0bbb184b"
                  }}
                  style={styles.ImageBackground_113_380}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfcb/acc1/27cc7b68b7f0a035787691363c453e1b"
                  }}
                  style={styles.ImageBackground_113_381}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa34/2289/a649f5a089316045ff4a1247ef9402fd"
                  }}
                  style={styles.ImageBackground_113_382}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_113_383}>
            <View style={styles.View_113_384}>
              <Text style={styles.Text_113_384}>African Movies</Text>
            </View>
            <View style={styles.View_113_385}>
              <View style={styles.View_113_386}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89b0/486a/997f8be9f073903a228e76fa8a560795"
                  }}
                  style={styles.ImageBackground_113_387}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69ec/487d/bb8a4efca1bf95821f8da69a56f5fe03"
                  }}
                  style={styles.ImageBackground_113_388}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a9/35b6/fb81f1b9d104a2c41db0f2a1e87e9c38"
                  }}
                  style={styles.ImageBackground_113_389}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9535/66fc/907474c75ff169fe0dcf9484f5e90d85"
                  }}
                  style={styles.ImageBackground_113_390}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3773/021a/18be00b2be938297331e92d6e86a91aa"
                  }}
                  style={styles.ImageBackground_113_391}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_113_392}>
            <View style={styles.View_113_393}>
              <Text style={styles.Text_113_393}>Netflix Originals</Text>
            </View>
            <View style={styles.View_113_394}>
              <View style={styles.View_113_395}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/d740/76a0c2f44f326924abdcd057bb7a69ed"
                  }}
                  style={styles.ImageBackground_113_396}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ab2/1a2c/f3aacf0ec426a40ee5f64b692f806373"
                  }}
                  style={styles.ImageBackground_113_397}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af5e/254e/7906cc9003045ced4c292300091b3707"
                  }}
                  style={styles.ImageBackground_113_398}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb27/d317/1694958a2089ba256cddd25d3a25faf6"
                  }}
                  style={styles.ImageBackground_113_399}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_113_400}>
            <View style={styles.View_113_401}>
              <Text style={styles.Text_113_401}>Nollywood Movies &amp; TV</Text>
            </View>
            <View style={styles.View_113_402}>
              <View style={styles.View_113_403}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f755/b06d/0940f2d45108a75220667c17c3ed9fc3"
                  }}
                  style={styles.ImageBackground_113_404}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a59/5438/6ea4c1e8e426f108ac0f10314f035238"
                  }}
                  style={styles.ImageBackground_113_405}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d9f/a082/25af3d671de3ba9d96e9bb21de54882a"
                  }}
                  style={styles.ImageBackground_113_406}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eebd/ecae/4e226461af927ff069a1d591a95da39b"
                  }}
                  style={styles.ImageBackground_113_407}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f8d/5e88/5ee5c550d3a5b99180ddc1a29b3a04fd"
                  }}
                  style={styles.ImageBackground_113_408}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_113_409}>
            <View style={styles.View_113_410}>
              <Text style={styles.Text_113_410}>Watch It Again</Text>
            </View>
            <View style={styles.View_113_411}>
              <View style={styles.View_113_412}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/908f/4c08/a496f81756a4b90099949f6eb9ba99af"
                  }}
                  style={styles.ImageBackground_113_413}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6317/ffed/49946b9ad6b3428d09d4c302557a21a1"
                  }}
                  style={styles.ImageBackground_113_414}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f7a/9206/d79fccb2f52846737738d517bd812f27"
                  }}
                  style={styles.ImageBackground_113_415}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9f8/aa3b/2a1a02049e95471953614669af3c5192"
                  }}
                  style={styles.ImageBackground_113_416}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cc/7bf4/c7d05e2b39dee1fe49ede039c1d3f7a4"
                  }}
                  style={styles.ImageBackground_113_417}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_113_418}>
            <View style={styles.View_113_419}>
              <Text style={styles.Text_113_419}>New Releases</Text>
            </View>
            <View style={styles.View_113_420}>
              <View style={styles.View_113_421}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54c5/f4d5/bec4d71e7b51535dc00e550bf5bae0e8"
                  }}
                  style={styles.ImageBackground_113_422}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d21/002c/3ca839c19d8af488513f050ed6273e38"
                  }}
                  style={styles.ImageBackground_113_423}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e64e/c027/9519f1cb63ced35eed17ed40d671f141"
                  }}
                  style={styles.ImageBackground_113_424}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ceb2/09be/44a747469b7ee84dca1ef0ea78e71fb1"
                  }}
                  style={styles.ImageBackground_113_425}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c05a/7ea3/510b2058f96a11241b64d19a0a9d88c2"
                  }}
                  style={styles.ImageBackground_113_426}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_113_427}>
            <View style={styles.View_113_428}>
              <Text style={styles.Text_113_428}>
                TV Thrillers &amp; Mysteries
              </Text>
            </View>
            <View style={styles.View_113_429}>
              <View style={styles.View_113_430}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f93/cd09/893c6f5595eec425ca0c8625de86e2d3"
                  }}
                  style={styles.ImageBackground_113_431}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc3/bac3/71c61975f85fd67b17735b0bc6bad57b"
                  }}
                  style={styles.ImageBackground_113_432}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b68/1bc1/808cf3a81812f51f250d9879eb9c81f7"
                  }}
                  style={styles.ImageBackground_113_433}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38bc/6976/17d1d34cf9ae76d60cbdd7e0cd58a976"
                  }}
                  style={styles.ImageBackground_113_434}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a00e/31d9/507a739027a431d02a16dc34782cb631"
                  }}
                  style={styles.ImageBackground_113_435}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_113_436}>
            <View style={styles.View_113_437}>
              <Text style={styles.Text_113_437}>US TV Shows</Text>
            </View>
            <View style={styles.View_113_438}>
              <View style={styles.View_113_439}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/791b/907d/125d0407c81b7ae1756e0c24667f0681"
                  }}
                  style={styles.ImageBackground_113_440}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df10/d86c/0a72f9b28ce93155daceb911499a5502"
                  }}
                  style={styles.ImageBackground_113_441}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a47e/d299/5d1d97734fe391e6d900cc78a2f174af"
                  }}
                  style={styles.ImageBackground_113_442}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2136/1446/887775a224009f091caeff46992744d5"
                  }}
                  style={styles.ImageBackground_113_443}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acf1/d139/3c5d6a90ad5fd6504022d86e3bdf9a87"
                  }}
                  style={styles.ImageBackground_113_444}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_113_445}>
          <View style={styles.View_113_446}>
            <View style={styles.View_113_447}>
              <View style={styles.View_113_448}>
                <View style={styles.View_113_449}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c174/0223/4baed84d6a30cb98d53266f23e1b50b3"
                    }}
                    style={styles.ImageBackground_113_450}
                  />
                  <View style={styles.View_113_451}>
                    <View style={styles.View_113_452} />
                    <View style={styles.View_113_453}>
                      <View style={styles.View_113_454} />
                      <View style={styles.View_113_455}>
                        <View style={styles.View_113_456}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9033/5598/3dfd12286811c646f9287142be952c1e"
                            }}
                            style={styles.ImageBackground_113_457}
                          />
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbf0/40a7/79f46e022c9eaeb4a183e967a59022fd"
                          }}
                          style={styles.ImageBackground_113_461}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_113_463}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee46/9f50/3b9a40d8e0ebd877eb34c54d9ae6ca17"
                }}
                style={styles.ImageBackground_113_464}
              />
              <View style={styles.View_113_465}>
                <View style={styles.View_113_466} />
                <View style={styles.View_113_467} />
                <View style={styles.View_113_468}>
                  <View style={styles.View_113_469} />
                  <View style={styles.View_113_470}>
                    <View style={styles.View_113_471}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9033/5598/3dfd12286811c646f9287142be952c1e"
                        }}
                        style={styles.ImageBackground_113_472}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbf0/40a7/79f46e022c9eaeb4a183e967a59022fd"
                      }}
                      style={styles.ImageBackground_113_476}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_113_478}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3536/7e8b/5493c26126aaae1633e110a84fe92ad2"
                }}
                style={styles.ImageBackground_113_479}
              />
              <View style={styles.View_113_480}>
                <View style={styles.View_113_481} />
                <View style={styles.View_113_482}>
                  <View style={styles.View_113_483} />
                  <View style={styles.View_113_484}>
                    <View style={styles.View_113_485}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9033/5598/3dfd12286811c646f9287142be952c1e"
                        }}
                        style={styles.ImageBackground_113_486}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbf0/40a7/79f46e022c9eaeb4a183e967a59022fd"
                      }}
                      style={styles.ImageBackground_113_490}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_113_492}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb3/f8bf/321540da19cd13fe4fd5dfcd2b0eecba"
                }}
                style={styles.ImageBackground_113_493}
              />
              <View style={styles.View_113_494}>
                <View style={styles.View_113_495} />
                <View style={styles.View_113_496}>
                  <View style={styles.View_113_497} />
                  <View style={styles.View_113_498}>
                    <View style={styles.View_113_499}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9033/5598/3dfd12286811c646f9287142be952c1e"
                        }}
                        style={styles.ImageBackground_113_500}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbf0/40a7/79f46e022c9eaeb4a183e967a59022fd"
                      }}
                      style={styles.ImageBackground_113_504}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_113_506}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d612/29f0/9bc54b94b24f71dc52f3c939d20dbc78"
            }}
            style={styles.ImageBackground_113_507}
          />
        </View>
        <View style={styles.View_113_513}>
          <View style={styles.View_113_514}>
            <View style={styles.View_113_515} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_113_516}
            />
            <View style={styles.View_113_517} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f77/5297/b7f442f721bdf6f24350b97358e64fc8"
            }}
            style={styles.ImageBackground_113_518}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4245/9c58/b5d9a9bf725bd32398c2d73bd06caca0"
            }}
            style={styles.ImageBackground_113_522}
          />
          <View style={styles.View_113_527}>
            <View style={styles.View_113_528}>
              <Text style={styles.Text_113_528}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_113_529}>
          <View style={styles.View_113_530} />
          <View style={styles.View_113_531} />
        </View>
        <View style={styles.View_113_532}>
          <View style={styles.View_113_533} />
          <View style={styles.View_113_534}>
            <View style={styles.View_113_535}>
              <View style={styles.View_113_536}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb5d/be2d/dd2f08db242051965411c3ae6412a8ac"
                  }}
                  style={styles.ImageBackground_113_537}
                />
              </View>
              <View style={styles.View_113_540}>
                <Text style={styles.Text_113_540}>Search</Text>
              </View>
            </View>
            <View style={styles.View_113_541}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c670/35e3/4d6960d444e2d54f197b9b93de58d9c8"
                }}
                style={styles.ImageBackground_113_542}
              />
              <View style={styles.View_113_543}>
                <Text style={styles.Text_113_543}>Coming Soon</Text>
              </View>
            </View>
            <View style={styles.View_113_544}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0211/fa8a/4614e1ac3e41518a7f7896aa5820583a"
                }}
                style={styles.ImageBackground_113_545}
              />
              <View style={styles.View_113_546}>
                <Text style={styles.Text_113_546}>More</Text>
              </View>
            </View>
            <View style={styles.View_113_547}>
              <View style={styles.View_113_548}>
                <Text style={styles.Text_113_548}>Home</Text>
              </View>
              <View style={styles.View_113_549}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a747/1120/b61accd5204ea7ec1947e31e9e6c5536"
                  }}
                  style={styles.ImageBackground_113_550}
                />
              </View>
            </View>
            <View style={styles.View_113_556}>
              <View style={styles.View_113_557}>
                <Text style={styles.Text_113_557}>Downloads</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9978/1c25/844eb5dfbd916252df7b9ff4f04d034c"
                }}
                style={styles.ImageBackground_113_558}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_113_560}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c113/95e3/f521038ff7dd9e911ce8167465081e06"
            }}
            style={styles.ImageBackground_I113_560_6_497}
          />
          <View style={styles.View_I113_560_6_496}>
            <Text style={styles.Text_I113_560_6_496}>4</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_113_563}>
        <View style={styles.View_113_564}>
          <View style={styles.View_113_565} />
          <View style={styles.View_113_566} />
        </View>
        <View style={styles.View_113_567}>
          <View style={styles.View_113_568}>
            <View style={styles.View_113_569} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_113_570}
            />
            <View style={styles.View_113_571} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f77/5297/b7f442f721bdf6f24350b97358e64fc8"
            }}
            style={styles.ImageBackground_113_572}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42b3/2344/e062d6c15014662a46df0d9e0ba45bc6"
            }}
            style={styles.ImageBackground_113_576}
          />
          <View style={styles.View_113_581}>
            <View style={styles.View_113_582}>
              <Text style={styles.Text_113_582}>9:41</Text>
            </View>
          </View>
          <View style={styles.View_113_583} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a1/74e2/e8d817669342f1bdcdab96b24108fa3a"
          }}
          style={styles.ImageBackground_113_584}
        />
        <View style={styles.View_113_586}>
          <Text style={styles.Text_113_586}>Add Profile</Text>
        </View>
        <View style={styles.View_113_587}>
          <View style={styles.View_I113_587_1_97}>
            <Text style={styles.Text_I113_587_1_97}>Emenalo</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0910/a514/0f98c22c578ad886d135f8a17cde1930"
            }}
            style={styles.ImageBackground_I113_587_1_93}
          />
        </View>
        <View style={styles.View_113_588}>
          <View style={styles.View_I113_588_1_99}>
            <Text style={styles.Text_I113_588_1_99}>Thelma</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbe1/a22f/f14f539a9073f8939f802894e2328b7e"
            }}
            style={styles.ImageBackground_I113_588_1_95}
          />
        </View>
        <View style={styles.View_113_589}>
          <View style={styles.View_I113_589_1_98}>
            <Text style={styles.Text_I113_589_1_98}>Onyeka</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64dc/0c5b/f6bfa1c9597500ca6ad5c16e134fcfe3"
            }}
            style={styles.ImageBackground_I113_589_1_94}
          />
        </View>
        <View style={styles.View_113_590}>
          <View style={styles.View_I113_590_1_100}>
            <Text style={styles.Text_I113_590_1_100}>Kids</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92cb/f0af/7d9a26e26958e682a90587779e940b23"
            }}
            style={styles.ImageBackground_I113_590_1_96}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f9d/d04e/d81d5a562861479befdbcd19c38a104f"
          }}
          style={styles.ImageBackground_113_591}
        />
        <View style={styles.View_113_593}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e4/f5b3/a438ad771a9959fb83addbf76e51c323"
            }}
            style={styles.ImageBackground_113_594}
          />
          <View style={styles.View_113_595}>
            <View style={styles.View_113_596} />
            <View style={styles.View_113_597} />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0254/4d82/26569832ec8d98802df429f8abedc890"
        }}
        style={styles.ImageBackground_109_2}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_109_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("131.14754098360655%"),
    minHeight: hp("131.14754098360655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_113_303: {
    width: wp("17.72349739074707%"),
    minWidth: wp("17.72349739074707%"),
    height: hp("83.88475928801657%"),
    minHeight: hp("83.88475928801657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.1340103149414%"),
    top: hp("29.776434559639686%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_113_304: {
    width: wp("23.4375%"),
    minWidth: wp("23.4375%"),
    height: hp("459.69945355191254%"),
    minHeight: hp("459.69945355191254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748636%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_113_305: {
    width: wp("20.041555404663086%"),
    minWidth: wp("20.041555404663086%"),
    height: hp("42.872136017012465%"),
    minHeight: hp("42.872136017012465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.159027099609375%"),
    top: hp("0%")
  },
  View_113_306: {
    width: wp("16.444393157958984%"),
    minWidth: wp("16.444393157958984%"),
    height: hp("5.888462587783897%"),
    minHeight: hp("5.888462587783897%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14178848266601562%"),
    top: hp("4.855396708504099%")
  },
  ImageBackground_113_307: {
    width: wp("2.504920721054077%"),
    height: hp("5.888462587783897%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_113_317: {
    width: wp("3.7337501049041744%"),
    minWidth: wp("3.7337501049041744%"),
    minHeight: hp("3.2024969820116387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6241397857666016%"),
    top: hp("1.2587417018869544%")
  },
  Text_113_317: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.00426959991455,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5764515399932861,
    textTransform: "none"
  },
  View_113_318: {
    width: wp("2.6467087268829346%"),
    minWidth: wp("2.6467087268829346%"),
    minHeight: hp("3.2024969820116387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.220237731933594%"),
    top: hp("1.2587417018869544%")
  },
  Text_113_318: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.00426959991455,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5764515399932861,
    textTransform: "none"
  },
  View_113_319: {
    width: wp("2.693971633911133%"),
    minWidth: wp("2.693971633911133%"),
    minHeight: hp("3.2024969820116387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.750419616699219%"),
    top: hp("1.2587417018869544%")
  },
  Text_113_319: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.00426959991455,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5764515399932861,
    textTransform: "none"
  },
  View_113_320: {
    width: wp("5.246155261993408%"),
    minWidth: wp("5.246155261993408%"),
    minHeight: hp("2.066127068358041%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7562026977539062%"),
    top: hp("53.30608763981388%")
  },
  Text_113_320: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.227067947387695,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.055501095950603485,
    textTransform: "none"
  },
  View_113_321: {
    width: wp("14.084272384643553%"),
    minWidth: wp("14.084272384643553%"),
    minHeight: hp("1.6160258829919365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7562026977539062%"),
    top: hp("71.17808190851264%")
  },
  Text_113_321: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.820646286010742,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04341030865907669,
    textTransform: "none"
  },
  View_113_322: {
    width: wp("12.241028785705566%"),
    minWidth: wp("12.241028785705566%"),
    height: hp("4.648786034088968%"),
    minHeight: hp("4.648786034088968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.55218505859375%"),
    top: hp("44.21511790791496%")
  },
  View_113_323: {
    width: wp("5.228431224822998%"),
    minWidth: wp("5.228431224822998%"),
    height: hp("4.648786034088968%"),
    minHeight: hp("4.648786034088968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.922800064086914%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 4.253639221191406,
    borderTopRightRadius: 4.253639221191406,
    borderBottomLeftRadius: 4.253639221191406,
    borderBottomRightRadius: 4.253639221191406
  },
  View_113_324: {
    width: wp("1.9377690553665161%"),
    minWidth: wp("1.9377690553665161%"),
    height: hp("4.648786034088968%"),
    minHeight: hp("4.648786034088968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_325: {
    width: wp("1.1343038082122803%"),
    height: hp("2.4793525862563506%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.42536163330078125%")
  },
  View_113_328: {
    width: wp("1.9377690553665161%"),
    minWidth: wp("1.9377690553665161%"),
    minHeight: hp("2.066127068358041%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5826709518015747%")
  },
  Text_113_328: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.315805435180664,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.030853061005473137,
    textTransform: "none"
  },
  View_113_329: {
    width: wp("1.1343038082122803%"),
    minWidth: wp("1.1343038082122803%"),
    height: hp("4.648786034088968%"),
    minHeight: hp("4.648786034088968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.10672378540039%"),
    top: hp("0%")
  },
  View_113_330: {
    width: wp("1.1343038082122803%"),
    minWidth: wp("1.1343038082122803%"),
    height: hp("4.648786034088968%"),
    minHeight: hp("4.648786034088968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_331: {
    width: wp("1.1343038082122803%"),
    minWidth: wp("1.1343038082122803%"),
    height: hp("2.4793525862563506%"),
    minHeight: hp("2.4793525862563506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_113_332: {
    width: wp("0.9452531337738037%"),
    height: hp("2.066127068358041%"),
    top: hp("0.20661901255124349%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09452438354492188%")
  },
  View_113_336: {
    width: wp("1.0397785902023315%"),
    minWidth: wp("1.0397785902023315%"),
    minHeight: hp("2.066127068358041%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04726219177246094%"),
    top: hp("2.5826709518015747%")
  },
  Text_113_336: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.315805435180664,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.030853061005473137,
    textTransform: "none"
  },
  View_113_337: {
    width: wp("5.576993465423584%"),
    minWidth: wp("5.576993465423584%"),
    minHeight: hp("2.066127068358041%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.096883773803711%"),
    top: hp("41.0126399472763%")
  },
  Text_113_337: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.377365112304688,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.03103717975318432,
    textTransform: "none"
  },
  View_113_338: {
    width: wp("3.4029114246368413%"),
    minWidth: wp("3.4029114246368413%"),
    height: hp("3.0991908631038143%"),
    minHeight: hp("3.0991908631038143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.372974395751953%"),
    top: hp("45.04157728184768%")
  },
  View_113_339: {
    width: wp("1.8432437181472778%"),
    minHeight: hp("3.0991908631038143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5596675872802734%"),
    top: hp("0%")
  },
  Text_113_339: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.473709106445312,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04627959430217743,
    textTransform: "none"
  },
  ImageBackground_113_340: {
    width: wp("0.8507278561592103%"),
    height: hp("2.2314173276307154%"),
    minHeight: hp("2.2314173276307154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4132213488302625%")
  },
  View_113_341: {
    width: wp("0.7089399099349976%"),
    minWidth: wp("0.7089399099349976%"),
    height: hp("1.5495954315519072%"),
    minHeight: hp("1.5495954315519072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.151630401611328%"),
    top: hp("41.32255178983094%")
  },
  View_113_342: {
    width: wp("0.42536392807960516%"),
    minWidth: wp("0.42536392807960516%"),
    height: hp("1.3946359926234178%"),
    minHeight: hp("1.3946359926234178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1417865753173828%"),
    top: hp("0.05164641500171285%")
  },
  View_113_343: {
    width: wp("0.40173259377479553%"),
    minWidth: wp("0.40173259377479553%"),
    minHeight: hp("1.0330635341790204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.023630142211914062%"),
    top: hp("0.36157493382854966%")
  },
  Text_113_343: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.188682556152344,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.01551858987659216,
    textTransform: "none"
  },
  View_113_344: {
    width: wp("0.42536392807960516%"),
    minWidth: wp("0.42536392807960516%"),
    minHeight: hp("0.7231444608969766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_113_344: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.2970430850982666,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.01551858987659216,
    textTransform: "none"
  },
  View_113_345: {
    width: wp("0.7089399099349976%"),
    minWidth: wp("0.7089399099349976%"),
    height: hp("1.5495954315519072%"),
    minHeight: hp("1.5495954315519072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.7562025189399719
  },
  View_113_346: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("19.73151326830921%"),
    minHeight: hp("19.73151326830921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5671501159667969%"),
    top: hp("95.66168446358435%")
  },
  View_113_347: {
    width: wp("7.940126895904541%"),
    minWidth: wp("7.940126895904541%"),
    minHeight: hp("1.652901680743108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18905258178710938%"),
    top: hp("0%")
  },
  Text_113_347: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.820646286010742,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04341030865907669,
    textTransform: "none"
  },
  View_113_348: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.099201806907473%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_349: {
    width: wp("25.66362380981445%"),
    minWidth: wp("25.66362380981445%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_350: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_351: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.397787094116211%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_352: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.198894500732422%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_353: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.5966796875%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_354: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.795570373535156%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_355: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("231.19963765795765%"),
    minHeight: hp("231.19963765795765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5671501159667969%"),
    top: hp("117.66594224940232%")
  },
  View_113_356: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("19.73151326830921%"),
    minHeight: hp("19.73151326830921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_357: {
    width: wp("6.191408157348633%"),
    minWidth: wp("6.191408157348633%"),
    minHeight: hp("1.652901680743108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18905258178710938%"),
    top: hp("0%")
  },
  Text_113_357: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.820646286010742,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04341030865907669,
    textTransform: "none"
  },
  View_113_358: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0991851306352487%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_359: {
    width: wp("25.66362380981445%"),
    minWidth: wp("25.66362380981445%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_360: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_361: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.397787094116211%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_362: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.198894500732422%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_363: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.5966796875%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_364: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.795570373535156%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_365: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("19.73151326830921%"),
    minHeight: hp("19.73151326830921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.00425778581797%")
  },
  View_113_366: {
    width: wp("10.255996704101562%"),
    minWidth: wp("10.255996704101562%"),
    minHeight: hp("1.652901680743108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18905258178710938%"),
    top: hp("0%")
  },
  Text_113_366: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.820646286010742,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04341030865907669,
    textTransform: "none"
  },
  View_113_367: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0991851306352487%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_368: {
    width: wp("25.66362380981445%"),
    minWidth: wp("25.66362380981445%"),
    height: hp("16.632327095406954%"),
    minHeight: hp("16.632327095406954%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_369: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_370: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.397787094116211%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_371: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.198894500732422%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_372: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.5966796875%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_373: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.795570373535156%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_374: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("19.73151326830921%"),
    minHeight: hp("19.73151326830921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.008532247908136%")
  },
  View_113_375: {
    width: wp("3.2138607501983643%"),
    minWidth: wp("3.2138607501983643%"),
    minHeight: hp("1.652901680743108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18905258178710938%"),
    top: hp("0%")
  },
  Text_113_375: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.820646286010742,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04341030865907669,
    textTransform: "none"
  },
  View_113_376: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0991851306352487%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_377: {
    width: wp("25.66362190246582%"),
    minWidth: wp("25.66362190246582%"),
    height: hp("16.632335433543055%"),
    minHeight: hp("16.632335433543055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_378: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_379: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.397787094116211%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_380: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.198894500732422%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_381: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.5966796875%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_382: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.795570373535156%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_383: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("19.73151326830921%"),
    minHeight: hp("19.73151326830921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.01277335745391%")
  },
  View_113_384: {
    width: wp("6.664034843444824%"),
    minWidth: wp("6.664034843444824%"),
    minHeight: hp("1.652901680743108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18905258178710938%"),
    top: hp("0%")
  },
  Text_113_384: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.820646286010742,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04341030865907669,
    textTransform: "none"
  },
  View_113_385: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0991851306352203%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_386: {
    width: wp("25.66362380981445%"),
    minWidth: wp("25.66362380981445%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_387: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_388: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.397787094116211%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_389: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.198894500732422%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_390: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.5966796875%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_391: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.795570373535156%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_392: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("29.029087421021178%"),
    minHeight: hp("29.029087421021178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("110.02128892908979%")
  },
  View_113_393: {
    width: wp("7.711638927459717%"),
    minWidth: wp("7.711638927459717%"),
    minHeight: hp("1.652901680743108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20293807983398438%"),
    top: hp("0%")
  },
  Text_113_393: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.820646286010742,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04341030865907669,
    textTransform: "none"
  },
  View_113_394: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("25.929896036783855%"),
    minHeight: hp("25.929896036783855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0991851306353055%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_395: {
    width: wp("30.013656616210938%"),
    minWidth: wp("30.013656616210938%"),
    height: hp("25.929896036783855%"),
    minHeight: hp("25.929896036783855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_396: {
    width: wp("7.280318260192871%"),
    minWidth: wp("7.280318260192871%"),
    height: hp("25.929896036783855%"),
    minHeight: hp("25.929896036783855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_397: {
    width: wp("7.280318260192871%"),
    minWidth: wp("7.280318260192871%"),
    height: hp("25.929896036783855%"),
    minHeight: hp("25.929896036783855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.169445037841797%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_398: {
    width: wp("7.280318260192871%"),
    minWidth: wp("7.280318260192871%"),
    height: hp("25.929896036783855%"),
    minHeight: hp("25.929896036783855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.733341217041016%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_399: {
    width: wp("7.280318260192871%"),
    minWidth: wp("7.280318260192871%"),
    height: hp("25.929896036783855%"),
    minHeight: hp("25.929896036783855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.584724426269531%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_400: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("19.73151326830921%"),
    minHeight: hp("19.73151326830921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("88.01701446699965%")
  },
  View_113_401: {
    width: wp("10.539572715759277%"),
    minWidth: wp("10.539572715759277%"),
    minHeight: hp("1.652901680743108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18905258178710938%"),
    top: hp("0%")
  },
  Text_113_401: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.820646286010742,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04341030865907669,
    textTransform: "none"
  },
  View_113_402: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0992184831796408%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_403: {
    width: wp("25.66362380981445%"),
    minWidth: wp("25.66362380981445%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_404: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_405: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.397787094116211%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_406: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.198894500732422%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_407: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.5966796875%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_408: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.795570373535156%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_409: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("19.73151326830921%"),
    minHeight: hp("19.73151326830921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("145.45533227138833%")
  },
  View_113_410: {
    width: wp("6.474984169006348%"),
    minWidth: wp("6.474984169006348%"),
    minHeight: hp("1.652901680743108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18905258178710938%"),
    top: hp("0%")
  },
  Text_113_410: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.820646286010742,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04341030865907669,
    textTransform: "none"
  },
  View_113_411: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0992184831796408%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_412: {
    width: wp("25.66362380981445%"),
    minWidth: wp("25.66362380981445%"),
    height: hp("16.632339602611104%"),
    minHeight: hp("16.632339602611104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_413: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_414: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.397787094116211%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_415: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.198894500732422%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_416: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.5966796875%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_417: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.795570373535156%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_418: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("19.73151326830921%"),
    minHeight: hp("19.73151326830921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("167.4596067334785%")
  },
  View_113_419: {
    width: wp("6.28593349456787%"),
    minWidth: wp("6.28593349456787%"),
    minHeight: hp("1.652901680743108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18905258178710938%"),
    top: hp("0%")
  },
  Text_113_419: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.820646286010742,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04341030865907669,
    textTransform: "none"
  },
  View_113_420: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0991851306352487%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_421: {
    width: wp("25.66362380981445%"),
    minWidth: wp("25.66362380981445%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_422: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_423: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.397787094116211%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_424: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.198894500732422%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_425: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.5966796875%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_426: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.795570373535156%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_427: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("19.73151326830921%"),
    minHeight: hp("19.73151326830921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("189.46388119556866%")
  },
  View_113_428: {
    width: wp("10.634098052978516%"),
    minWidth: wp("10.634098052978516%"),
    minHeight: hp("1.652901680743108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18905258178710938%"),
    top: hp("0%")
  },
  Text_113_428: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.820646286010742,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04341030865907669,
    textTransform: "none"
  },
  View_113_429: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0991851306352487%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_430: {
    width: wp("25.66362380981445%"),
    minWidth: wp("25.66362380981445%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_431: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_432: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.397787094116211%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_433: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.198894500732422%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_434: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.5966796875%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_435: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.795570373535156%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_436: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("19.73151326830921%"),
    minHeight: hp("19.73151326830921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("211.46815565765883%")
  },
  View_113_437: {
    width: wp("6.049620151519775%"),
    minWidth: wp("6.049620151519775%"),
    minHeight: hp("1.652901680743108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18905258178710938%"),
    top: hp("0%")
  },
  Text_113_437: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.820646286010742,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04341030865907669,
    textTransform: "none"
  },
  View_113_438: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0991851306352487%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_439: {
    width: wp("25.66362380981445%"),
    minWidth: wp("25.66362380981445%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_440: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_441: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.397787094116211%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_442: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.198894500732422%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_443: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.5966796875%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  ImageBackground_113_444: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("16.632323968605917%"),
    minHeight: hp("16.632323968605917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.795570373535156%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_445: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("18.28522395566513%"),
    minHeight: hp("18.28522395566513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5671501159667969%"),
    top: hp("75.1037264130806%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_446: {
    width: wp("20.464731216430664%"),
    minWidth: wp("20.464731216430664%"),
    height: hp("18.28522395566513%"),
    minHeight: hp("18.28522395566513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_447: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("18.28522395566513%"),
    minHeight: hp("18.28522395566513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_448: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("18.28522395566513%"),
    minHeight: hp("18.28522395566513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_449: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("18.28522395566513%"),
    minHeight: hp("18.28522395566513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_450: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("18.28522395566513%"),
    minHeight: hp("18.28522395566513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_451: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("4.132254136716082%"),
    minHeight: hp("4.132254136716082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.152968776682044%")
  },
  View_113_452: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("0.3099190732820438%"),
    minHeight: hp("0.3099190732820438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 74, 74, 1)"
  },
  View_113_453: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("3.82233499829235%"),
    minHeight: hp("3.82233499829235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.309928518826851%")
  },
  View_113_454: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("3.82233499829235%"),
    minHeight: hp("3.82233499829235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_455: {
    width: wp("3.7337501049041744%"),
    minWidth: wp("3.7337501049041744%"),
    height: hp("2.4793525862563506%"),
    minHeight: hp("2.4793525862563506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5671539306640625%"),
    top: hp("0.7231331913849033%")
  },
  View_113_456: {
    width: wp("1.1343038082122803%"),
    minWidth: wp("1.1343038082122803%"),
    height: hp("2.4793525862563506%"),
    minHeight: hp("2.4793525862563506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_113_457: {
    width: wp("0.9452531337738037%"),
    height: hp("2.066127068358041%"),
    top: hp("0.20661901255121506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09452438354492188%")
  },
  ImageBackground_113_461: {
    width: wp("1.1343038082122803%"),
    height: hp("2.4793525862563506%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.599447250366211%")
  },
  View_113_463: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("18.28522395566513%"),
    minHeight: hp("18.28522395566513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.198894500732422%"),
    top: hp("0%")
  },
  ImageBackground_113_464: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("18.28522395566513%"),
    minHeight: hp("18.28522395566513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_465: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("4.132254136716082%"),
    minHeight: hp("4.132254136716082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.152968776682044%")
  },
  View_113_466: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("0.3099190732820438%"),
    minHeight: hp("0.3099190732820438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 74, 74, 1)"
  },
  View_113_467: {
    width: wp("1.654193043708801%"),
    minWidth: wp("1.654193043708801%"),
    height: hp("0.3099190732820438%"),
    minHeight: hp("0.3099190732820438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 9, 20, 1)"
  },
  View_113_468: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("3.82233499829235%"),
    minHeight: hp("3.82233499829235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.309928518826851%")
  },
  View_113_469: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("3.82233499829235%"),
    minHeight: hp("3.82233499829235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_470: {
    width: wp("3.7337501049041744%"),
    minWidth: wp("3.7337501049041744%"),
    height: hp("2.4793525862563506%"),
    minHeight: hp("2.4793525862563506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5671520233154297%"),
    top: hp("0.7231331913849033%")
  },
  View_113_471: {
    width: wp("1.1343038082122803%"),
    minWidth: wp("1.1343038082122803%"),
    height: hp("2.4793525862563506%"),
    minHeight: hp("2.4793525862563506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_113_472: {
    width: wp("0.9452531337738037%"),
    height: hp("2.066127068358041%"),
    top: hp("0.20661901255121506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09452438354492188%")
  },
  ImageBackground_113_476: {
    width: wp("1.1343038082122803%"),
    height: hp("2.4793525862563506%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.599445343017578%")
  },
  View_113_478: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("18.28522395566513%"),
    minHeight: hp("18.28522395566513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.397787094116211%"),
    top: hp("0%")
  },
  ImageBackground_113_479: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("18.28522395566513%"),
    minHeight: hp("18.28522395566513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_480: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("4.132254136716082%"),
    minHeight: hp("4.132254136716082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.152968776682044%")
  },
  View_113_481: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("0.3099190732820438%"),
    minHeight: hp("0.3099190732820438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 74, 74, 1)"
  },
  View_113_482: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("3.82233499829235%"),
    minHeight: hp("3.82233499829235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.309928518826851%")
  },
  View_113_483: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("3.82233499829235%"),
    minHeight: hp("3.82233499829235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_484: {
    width: wp("3.7337501049041744%"),
    minWidth: wp("3.7337501049041744%"),
    height: hp("2.4793525862563506%"),
    minHeight: hp("2.4793525862563506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5671520233154297%"),
    top: hp("0.7231331913849033%")
  },
  View_113_485: {
    width: wp("1.1343038082122803%"),
    minWidth: wp("1.1343038082122803%"),
    height: hp("2.4793525862563506%"),
    minHeight: hp("2.4793525862563506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_113_486: {
    width: wp("0.9452531337738037%"),
    height: hp("2.066127068358041%"),
    top: hp("0.20661901255121506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09452629089355469%")
  },
  ImageBackground_113_490: {
    width: wp("1.1343038082122803%"),
    height: hp("2.4793525862563506%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.599445343017578%")
  },
  View_113_492: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("18.28522395566513%"),
    minHeight: hp("18.28522395566513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.5966796875%"),
    top: hp("0%")
  },
  ImageBackground_113_493: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("18.28522395566513%"),
    minHeight: hp("18.28522395566513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 1.5124050378799438,
    borderTopRightRadius: 1.5124050378799438,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_494: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("4.132254136716082%"),
    minHeight: hp("4.132254136716082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.152968776682044%")
  },
  View_113_495: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("0.3099190732820438%"),
    minHeight: hp("0.3099190732820438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 74, 74, 1)"
  },
  View_113_496: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("3.82233499829235%"),
    minHeight: hp("3.82233499829235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.309928518826851%")
  },
  View_113_497: {
    width: wp("4.868053436279297%"),
    minWidth: wp("4.868053436279297%"),
    height: hp("3.82233499829235%"),
    minHeight: hp("3.82233499829235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 1.5124050378799438,
    borderBottomRightRadius: 1.5124050378799438
  },
  View_113_498: {
    width: wp("3.7337501049041744%"),
    minWidth: wp("3.7337501049041744%"),
    height: hp("2.4793525862563506%"),
    minHeight: hp("2.4793525862563506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5671520233154297%"),
    top: hp("0.7231331913849033%")
  },
  View_113_499: {
    width: wp("1.1343038082122803%"),
    minWidth: wp("1.1343038082122803%"),
    height: hp("2.4793525862563506%"),
    minHeight: hp("2.4793525862563506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_113_500: {
    width: wp("0.9452531337738037%"),
    height: hp("2.066127068358041%"),
    top: hp("0.20661901255121506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09452438354492188%")
  },
  ImageBackground_113_504: {
    width: wp("1.1343038082122803%"),
    height: hp("2.4793525862563506%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.599445343017578%")
  },
  View_113_506: {
    width: wp("17.15634536743164%"),
    minWidth: wp("17.15634536743164%"),
    height: hp("10.537248621872864%"),
    minHeight: hp("10.537248621872864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5671501159667969%"),
    top: hp("57.74826299948771%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_113_507: {
    width: wp("25.427310943603516%"),
    minWidth: wp("25.427310943603516%"),
    height: hp("10.537248621872864%"),
    minHeight: hp("10.537248621872864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_513: {
    flexGrow: 1,
    width: wp("17.72349739074707%"),
    height: hp("4.5454801757478975%"),
    minHeight: hp("4.5454801757478975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_514: {
    width: wp("1.1498076915740967%"),
    minWidth: wp("1.1498076915740967%"),
    height: hp("1.170805373478457%"),
    minHeight: hp("1.170805373478457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.896007537841797%"),
    top: hp("1.7906647562329248%")
  },
  View_113_515: {
    width: wp("1.0397785902023315%"),
    height: hp("1.170805373478457%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.7562025189399719
  },
  ImageBackground_113_516: {
    width: wp("0.06276660412549973%"),
    height: hp("0.413225420185777%"),
    top: hp("0.3787681704661878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0870399475097656%")
  },
  View_113_517: {
    width: wp("0.8507278561592103%"),
    height: hp("0.757579985863524%"),
    top: hp("0.20660233627902613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09452438354492188%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_113_518: {
    width: wp("0.7246924638748169%"),
    height: hp("1.1363700439369744%"),
    top: hp("1.7903812596055353%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.935001373291016%")
  },
  ImageBackground_113_522: {
    width: wp("0.8034651875495911%"),
    height: hp("1.1019344538287388%"),
    top: hp("1.8250845820525932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.895221710205078%")
  },
  View_113_527: {
    width: wp("2.5521836280822754%"),
    height: hp("2.169433578115995%"),
    top: hp("0.7231498676571029%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9925155639648438%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_528: {
    width: wp("2.5521836280822754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6198236851092886%")
  },
  Text_113_528: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.343037605285645,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.18148860335350037,
    textTransform: "none"
  },
  View_113_529: {
    width: wp("17.72349739074707%"),
    minWidth: wp("17.72349739074707%"),
    height: hp("3.275110943069875%"),
    minHeight: hp("3.275110943069875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80.5789634829662%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    overflow: "hidden"
  },
  View_113_530: {
    width: wp("17.72349739074707%"),
    height: hp("3.275110943069875%"),
    top: hp("-0.09357056331114677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_113_531: {
    width: wp("5.73659086227417%"),
    height: hp("0.46787297790819177%"),
    minHeight: hp("0.46787297790819177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.9934539794921875%"),
    top: hp("1.8714946475836598%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_113_532: {
    width: wp("17.72349739074707%"),
    minWidth: wp("17.72349739074707%"),
    height: hp("5.475236548752081%"),
    minHeight: hp("5.475236548752081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75.62027394445869%")
  },
  View_113_533: {
    width: wp("17.72349739074707%"),
    minWidth: wp("17.72349739074707%"),
    height: hp("4.958705172512701%"),
    minHeight: hp("4.958705172512701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_113_534: {
    width: wp("15.12405014038086%"),
    minWidth: wp("15.12405014038086%"),
    height: hp("4.648786034088968%"),
    minHeight: hp("4.648786034088968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.228830337524414%"),
    top: hp("0.8264426976604966%")
  },
  View_113_535: {
    width: wp("1.2760918140411377%"),
    minWidth: wp("1.2760918140411377%"),
    height: hp("4.648786034088968%"),
    minHeight: hp("4.648786034088968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.497438430786133%"),
    top: hp("0%")
  },
  View_113_536: {
    width: wp("1.1343038082122803%"),
    minWidth: wp("1.1343038082122803%"),
    height: hp("2.4793525862563506%"),
    minHeight: hp("2.4793525862563506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09452438354492188%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_113_537: {
    width: wp("0.8507278561592103%"),
    height: hp("1.8595144396922627%"),
    top: hp("0.30991184255464077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1417865753173828%")
  },
  View_113_540: {
    width: wp("1.2760918140411377%"),
    minWidth: wp("1.2760918140411377%"),
    minHeight: hp("3.2024969820116387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0000019073486328125%"),
    top: hp("1.4462830590420168%")
  },
  Text_113_540: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 5.200860500335693,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1966126412153244,
    textTransform: "none"
  },
  View_113_541: {
    width: wp("2.410395622253418%"),
    minWidth: wp("2.410395622253418%"),
    height: hp("4.4421732751398135%"),
    minHeight: hp("4.4421732751398135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.427722930908203%"),
    top: hp("0.20660233627904745%")
  },
  ImageBackground_113_542: {
    width: wp("0.9452531337738037%"),
    height: hp("2.066127068358041%"),
    minHeight: hp("2.066127068358041%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7562007904052734%"),
    top: hp("0%")
  },
  View_113_543: {
    width: wp("2.410395622253418%"),
    minWidth: wp("2.410395622253418%"),
    minHeight: hp("3.2024969820116387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.2396807227629694%")
  },
  Text_113_543: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 5.200860500335693,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1966126412153244,
    textTransform: "none"
  },
  View_113_544: {
    width: wp("0.9925158619880676%"),
    minWidth: wp("0.9925158619880676%"),
    height: hp("4.33886715623199%"),
    minHeight: hp("4.33886715623199%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.131536483764648%"),
    top: hp("0.30991184255464077%")
  },
  ImageBackground_113_545: {
    width: wp("0.9925157427787781%"),
    minWidth: wp("0.9925157427787781%"),
    height: hp("1.7562080602176855%"),
    minHeight: hp("1.7562080602176855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_546: {
    width: wp("0.9452531337738037%"),
    minWidth: wp("0.9452531337738037%"),
    minHeight: hp("3.2024969820116387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04726219177246094%"),
    top: hp("1.136371216487376%")
  },
  Text_113_546: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 5.200860500335693,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1966126412153244,
    textTransform: "none"
  },
  View_113_547: {
    width: wp("1.1343038082122803%"),
    minWidth: wp("1.1343038082122803%"),
    height: hp("4.648786034088968%"),
    minHeight: hp("4.648786034088968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_548: {
    width: wp("1.0870411396026611%"),
    minWidth: wp("1.0870411396026611%"),
    minHeight: hp("3.2024969820116387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.4462830590420168%")
  },
  Text_113_548: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5.200860500335693,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1966126412153244,
    textTransform: "none"
  },
  View_113_549: {
    width: wp("1.1343038082122803%"),
    minWidth: wp("1.1343038082122803%"),
    height: hp("2.4793525862563506%"),
    minHeight: hp("2.4793525862563506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_113_550: {
    width: wp("0.9452531337738037%"),
    height: hp("1.7562080602176855%"),
    top: hp("0.20660233627904745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09452629089355469%")
  },
  View_113_556: {
    width: wp("1.9850317239761353%"),
    minWidth: wp("1.9850317239761353%"),
    height: hp("4.648786034088968%"),
    minHeight: hp("4.648786034088968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.16147232055664%"),
    top: hp("0%")
  },
  View_113_557: {
    width: wp("1.9850317239761353%"),
    minWidth: wp("1.9850317239761353%"),
    minHeight: hp("3.2024969820116387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.4462830590420168%")
  },
  Text_113_557: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 5.200860500335693,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1966126412153244,
    textTransform: "none"
  },
  ImageBackground_113_558: {
    width: wp("1.1343038082122803%"),
    height: hp("2.4793525862563506%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.42536354064941406%")
  },
  View_113_560: {
    width: wp("0.47262656688690186%"),
    minWidth: wp("0.47262656688690186%"),
    height: hp("1.0330635341790204%"),
    minHeight: hp("1.0330635341790204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.027168273925781%"),
    top: hp("76.34340713584359%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I113_560_6_497: {
    flexGrow: 1,
    width: wp("0.47262656688690186%"),
    height: hp("1.0330635341790204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I113_560_6_496: {
    flexGrow: 1,
    width: wp("0.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.125%"),
    top: hp("0.6830601092895989%")
  },
  Text_I113_560_6_496: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5.200860500335693,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1966126412153244,
    textTransform: "none"
  },
  View_113_563: {
    width: wp("18.011083602905273%"),
    minWidth: wp("18.011083602905273%"),
    height: hp("85.24590163934425%"),
    minHeight: hp("85.24590163934425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.125%"),
    top: hp("12.841530054644808%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_113_564: {
    width: wp("18.011083602905273%"),
    minWidth: wp("18.011083602905273%"),
    height: hp("3.32825379293473%"),
    minHeight: hp("3.32825379293473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81.88646660476435%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    overflow: "hidden"
  },
  View_113_565: {
    width: wp("18.011083602905273%"),
    height: hp("3.32825379293473%"),
    top: hp("-0.09510478035349479%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_113_566: {
    width: wp("5.829674243927002%"),
    height: hp("0.47546485082699297%"),
    minHeight: hp("0.47546485082699297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.090705871582031%"),
    top: hp("1.9018454629866852%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_113_567: {
    flexGrow: 1,
    width: wp("18.011083602905273%"),
    height: hp("4.619236200885043%"),
    minHeight: hp("4.619236200885043%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_113_568: {
    width: wp("1.1684648990631104%"),
    minWidth: wp("1.1684648990631104%"),
    height: hp("1.1898031651648018%"),
    minHeight: hp("1.1898031651648018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.15393829345703%"),
    top: hp("1.819698146132172%")
  },
  View_113_569: {
    width: wp("1.0566502809524536%"),
    height: hp("1.1898031651648018%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.7684729099273682
  },
  ImageBackground_113_570: {
    width: wp("0.06378507614135742%"),
    height: hp("0.41993055187287875%"),
    top: hp("0.3849383911799862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1046791076660156%")
  },
  View_113_571: {
    width: wp("0.8645319938659668%"),
    height: hp("0.7698726784336111%"),
    top: hp("0.2099709432633201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09605789184570312%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_113_572: {
    width: wp("0.7364515662193298%"),
    height: hp("1.1548090502212607%"),
    top: hp("1.8194146495047807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.17734146118164%")
  },
  ImageBackground_113_576: {
    width: wp("0.8165024518966675%"),
    height: hp("1.1198148049943435%"),
    top: hp("1.8546849652066282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.120689392089844%")
  },
  View_113_581: {
    width: wp("2.5935959815979004%"),
    height: hp("2.2046354950451463%"),
    top: hp("0.7348732870133201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0086212158203125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_582: {
    width: wp("2.5935959815979004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6298961535177607%")
  },
  Text_113_582: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.527093887329102,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.1844334900379181,
    textTransform: "none"
  },
  View_113_583: {
    width: wp("18.011083602905273%"),
    minWidth: wp("18.011083602905273%"),
    height: hp("77.2672225868767%"),
    minHeight: hp("77.2672225868767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.619244017887636%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_113_584: {
    width: wp("6.6280789375305185%"),
    height: hp("3.904861960906149%"),
    top: hp("5.984013458418717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.7635498046875%")
  },
  View_113_586: {
    width: wp("3.26600980758667%"),
    minWidth: wp("3.26600980758667%"),
    minHeight: hp("2.834531127429399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.370689392089837%"),
    top: hp("63.93442622950819%")
  },
  Text_113_586: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.182266235351562,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5194876790046692,
    textTransform: "none"
  },
  View_113_587: {
    width: wp("4.802955627441406%"),
    minWidth: wp("4.802955627441406%"),
    height: hp("12.702899161583739%"),
    minHeight: hp("12.702899161583739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6022186279296804%"),
    top: hp("23.306141003884903%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I113_587_1_97: {
    flexGrow: 1,
    width: wp("3.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.500000000000007%"),
    top: hp("12.841530054644814%")
  },
  Text_I113_587_1_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.182266235351562,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5194876790046692,
    textTransform: "none"
  },
  ImageBackground_I113_587_1_93: {
    flexGrow: 1,
    width: wp("4.802955627441406%"),
    height: hp("9.658402823359587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 5.379310607910156,
    borderTopRightRadius: 5.379310607910156,
    borderBottomLeftRadius: 5.379310607910156,
    borderBottomRightRadius: 5.379310607910156
  },
  View_113_588: {
    width: wp("4.802955627441406%"),
    minWidth: wp("4.802955627441406%"),
    height: hp("12.702899161583739%"),
    minHeight: hp("12.702899161583739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6022186279296804%"),
    top: hp("38.31867155481558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I113_588_1_99: {
    flexGrow: 1,
    width: wp("2.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6875000000000142%"),
    top: hp("12.841530054644807%")
  },
  Text_I113_588_1_99: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.182266235351562,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5194876790046692,
    textTransform: "none"
  },
  ImageBackground_I113_588_1_95: {
    flexGrow: 1,
    width: wp("4.802955627441406%"),
    height: hp("9.658402823359587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 5.379310607910156,
    borderTopRightRadius: 5.379310607910156,
    borderBottomLeftRadius: 5.379310607910156,
    borderBottomRightRadius: 5.379310607910156
  },
  View_113_589: {
    width: wp("4.802955627441406%"),
    minWidth: wp("4.802955627441406%"),
    height: hp("12.702899161583739%"),
    minHeight: hp("12.702899161583739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.605911254882812%"),
    top: hp("23.306141003884903%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I113_589_1_98: {
    flexGrow: 1,
    width: wp("2.9375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.625%"),
    top: hp("12.841530054644814%")
  },
  Text_I113_589_1_98: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.182266235351562,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5194876790046692,
    textTransform: "none"
  },
  ImageBackground_I113_589_1_94: {
    flexGrow: 1,
    width: wp("4.802955627441406%"),
    height: hp("9.658402823359587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 5.379310607910156,
    borderTopRightRadius: 5.379310607910156,
    borderBottomLeftRadius: 5.379310607910156,
    borderBottomRightRadius: 5.379310607910156
  },
  View_113_590: {
    width: wp("4.802955627441406%"),
    minWidth: wp("4.802955627441406%"),
    height: hp("12.702899161583739%"),
    minHeight: hp("12.702899161583739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.605911254882812%"),
    top: hp("38.31867155481558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I113_590_1_100: {
    flexGrow: 1,
    width: wp("1.6875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.312500000000007%"),
    top: hp("12.841530054644807%")
  },
  Text_I113_590_1_100: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.182266235351562,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5194876790046692,
    textTransform: "none"
  },
  ImageBackground_I113_590_1_96: {
    flexGrow: 1,
    width: wp("4.802955627441406%"),
    height: hp("9.658402823359587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 5.379310607910156,
    borderTopRightRadius: 5.379310607910156,
    borderBottomLeftRadius: 5.379310607910156,
    borderBottomRightRadius: 5.379310607910156
  },
  ImageBackground_113_591: {
    width: wp("1.1527093648910522%"),
    height: hp("2.5195833112372727%"),
    top: hp("6.718886745432036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.65763854980468%")
  },
  View_113_593: {
    width: wp("2.401477813720703%"),
    minWidth: wp("2.401477813720703%"),
    height: hp("5.249131833269296%"),
    minHeight: hp("5.249131833269296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.802955627441406%"),
    top: hp("57.32051661757173%")
  },
  ImageBackground_113_594: {
    width: wp("2.401477813720703%"),
    minWidth: wp("2.401477813720703%"),
    height: hp("5.249131833269296%"),
    minHeight: hp("5.249131833269296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_595: {
    width: wp("1.5086207389831543%"),
    minWidth: wp("1.5086207389831543%"),
    height: hp("3.297531669908534%"),
    minHeight: hp("3.297531669908534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.461822509765625%"),
    top: hp("1.0094481087773204%")
  },
  View_113_596: {
    width: wp("0.33943963050842285%"),
    minWidth: wp("0.33943963050842285%"),
    height: hp("3.297531669908534%"),
    minHeight: hp("3.297531669908534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5657348632812571%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_113_597: {
    width: wp("1.5086207389831543%"),
    minWidth: wp("1.5086207389831543%"),
    height: hp("0.7419446778427707%"),
    minHeight: hp("0.7419446778427707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.2365789361338813%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_109_2: {
    width: wp("21.06254005432129%"),
    height: hp("12.528415325560857%"),
    top: hp("57.103825136612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.874870300292969%")
  },
  View_2: { height: 960 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
