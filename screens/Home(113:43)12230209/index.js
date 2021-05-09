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
      <View style={styles.View_113_44} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fd1/7fd7/7518eee169ed53a76f0ccf11c206cc3f"
        }}
        style={styles.ImageBackground_113_45}
      />
      <View style={styles.View_113_46}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/4f69/160be67fc5664ca667ef0479a1fb47cf"
          }}
          style={styles.ImageBackground_113_47}
        />
        <View style={styles.View_113_57}>
          <Text style={styles.Text_113_57}>TV Shows</Text>
        </View>
        <View style={styles.View_113_58}>
          <Text style={styles.Text_113_58}>Movies</Text>
        </View>
        <View style={styles.View_113_59}>
          <Text style={styles.Text_113_59}>My List</Text>
        </View>
      </View>
      <View style={styles.View_113_60}>
        <Text style={styles.Text_113_60}>Previews</Text>
      </View>
      <View style={styles.View_113_61}>
        <Text style={styles.Text_113_61}>Continue Watching for Emenalo</Text>
      </View>
      <View style={styles.View_113_62}>
        <View style={styles.View_113_63} />
        <View style={styles.View_113_64}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dba/4f61/4d8ce45de9895085473c41a9f0792b5b"
            }}
            style={styles.ImageBackground_113_65}
          />
          <View style={styles.View_113_68}>
            <Text style={styles.Text_113_68}>My List</Text>
          </View>
        </View>
        <View style={styles.View_113_69}>
          <View style={styles.View_113_70}>
            <View style={styles.View_113_71}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1446/9af6/b378939ec327b601b71baa9b783cb688"
                }}
                style={styles.ImageBackground_113_72}
              />
            </View>
            <View style={styles.View_113_76}>
              <Text style={styles.Text_113_76}>Info</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_113_77}>
        <Text style={styles.Text_113_77}>#2 in Nigeria Today</Text>
      </View>
      <View style={styles.View_113_78}>
        <View style={styles.View_113_79}>
          <Text style={styles.Text_113_79}>Play</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae6/d465/15cb1f36741397182160db8bdfc389a3"
          }}
          style={styles.ImageBackground_113_80}
        />
      </View>
      <View style={styles.View_113_81}>
        <View style={styles.View_113_82}>
          <View style={styles.View_113_83}>
            <Text style={styles.Text_113_83}>10</Text>
          </View>
          <View style={styles.View_113_84}>
            <Text style={styles.Text_113_84}>TOP</Text>
          </View>
        </View>
        <View style={styles.View_113_85} />
      </View>
      <View style={styles.View_113_86}>
        <View style={styles.View_113_87}>
          <Text style={styles.Text_113_87}>Popular on Netflix</Text>
        </View>
        <View style={styles.View_113_88}>
          <View style={styles.View_113_89}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/937c/b1e9/9d2677321a22093370a82c30b4445470"
              }}
              style={styles.ImageBackground_113_90}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b4f/929e/eb8772a00930fa9652fd4405ed62cb94"
              }}
              style={styles.ImageBackground_113_91}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95a7/d897/23102d4cc9916f7823c124ea62a1f9d7"
              }}
              style={styles.ImageBackground_113_92}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/732c/4cbd/dd3d2ace9217bcaab24ef3b92b93f76d"
              }}
              style={styles.ImageBackground_113_93}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a36/b093/2fcf69f7bfeca10a21c16ac90cc70dbf"
              }}
              style={styles.ImageBackground_113_94}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_113_95}>
        <View style={styles.View_113_96}>
          <View style={styles.View_113_97}>
            <Text style={styles.Text_113_97}>Trending Now</Text>
          </View>
          <View style={styles.View_113_98}>
            <View style={styles.View_113_99}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a204/4f83/6954cc0cc7c2ff269df0af72b1d71bc2"
                }}
                style={styles.ImageBackground_113_100}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae0f/8c81/381473030823f116ab65907385f53c61"
                }}
                style={styles.ImageBackground_113_101}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5f1/0d59/cefae1b711ab8045718ad7bab81194da"
                }}
                style={styles.ImageBackground_113_102}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ecf/6a47/8355842ac3172b63bf7705d3bb1f020c"
                }}
                style={styles.ImageBackground_113_103}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b62f/d3ae/a55d4008a331c3bd2faa314885341a57"
                }}
                style={styles.ImageBackground_113_104}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_113_105}>
          <View style={styles.View_113_106}>
            <Text style={styles.Text_113_106}>Top 10 in Nigeria Today</Text>
          </View>
          <View style={styles.View_113_107}>
            <View style={styles.View_113_108}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d653/9698/a40d4cb2dec1358359370149cf7207ac"
                }}
                style={styles.ImageBackground_113_109}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b797/6e1e/09f5e806af6e22949b42dd54276d6da3"
                }}
                style={styles.ImageBackground_113_110}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1881/d893/27fcb6e2087bd104c92a420c8b3fcd86"
                }}
                style={styles.ImageBackground_113_111}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0851/cf43/f3773adb0739f68a50f2b6ac5a809bc0"
                }}
                style={styles.ImageBackground_113_112}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/daa6/5180/1e48be602d9e9152528d74fcc2758ab2"
                }}
                style={styles.ImageBackground_113_113}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_113_114}>
          <View style={styles.View_113_115}>
            <Text style={styles.Text_113_115}>My List</Text>
          </View>
          <View style={styles.View_113_116}>
            <View style={styles.View_113_117}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9766/5944/0c5cea0ba61203b67948b018ed16a79b"
                }}
                style={styles.ImageBackground_113_118}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/448e/c1a4/33159025f45149c0398b702b620a1d6e"
                }}
                style={styles.ImageBackground_113_119}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4020/bfc2/c03978acdbc0277098806ab0ab6e737b"
                }}
                style={styles.ImageBackground_113_120}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b36/bf6c/4e12697f817ad74885b333eec5b85f4a"
                }}
                style={styles.ImageBackground_113_121}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f0a/836d/aa054083ac416f013539de3c30400a21"
                }}
                style={styles.ImageBackground_113_122}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_113_123}>
          <View style={styles.View_113_124}>
            <Text style={styles.Text_113_124}>African Movies</Text>
          </View>
          <View style={styles.View_113_125}>
            <View style={styles.View_113_126}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbda/b7a9/2119389192f8ec5fbf57f49c5df1d914"
                }}
                style={styles.ImageBackground_113_127}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c867/82aa/ac118e61ef3ef2f2e5ab899b24ed8bb4"
                }}
                style={styles.ImageBackground_113_128}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fbd/a99a/0cf540117884dd289b93343f4ab68dab"
                }}
                style={styles.ImageBackground_113_129}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcd8/d6e0/be61d9cd8942e00279ad5ccec18309d0"
                }}
                style={styles.ImageBackground_113_130}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19ee/8bac/11fa46a0d43468304ce1685c0cf13ed1"
                }}
                style={styles.ImageBackground_113_131}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_113_132}>
          <View style={styles.View_113_133}>
            <Text style={styles.Text_113_133}>Netflix Originals</Text>
          </View>
          <View style={styles.View_113_134}>
            <View style={styles.View_113_135}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f0a/2d33/2ee36bdd31fde8d3c2f868394258550b"
                }}
                style={styles.ImageBackground_113_136}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2b2/7227/c7989b22718c8b34f6ed74f9de74c1ad"
                }}
                style={styles.ImageBackground_113_137}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/effb/52ce/eb758ac5eb7aa797f59508b5158aeed3"
                }}
                style={styles.ImageBackground_113_138}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89d0/cd1c/cdf6b27683959771d537990df73c1902"
                }}
                style={styles.ImageBackground_113_139}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_113_140}>
          <View style={styles.View_113_141}>
            <Text style={styles.Text_113_141}>Nollywood Movies &amp; TV</Text>
          </View>
          <View style={styles.View_113_142}>
            <View style={styles.View_113_143}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/998e/b2bc/3b47248a1a07165b816251e5e65dcf63"
                }}
                style={styles.ImageBackground_113_144}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f39d/7b1a/e992d85182f7f959ba4e1d116b7083f3"
                }}
                style={styles.ImageBackground_113_145}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc3a/6cf9/b692f67fb2c4a8e7658b9f9d74607b6c"
                }}
                style={styles.ImageBackground_113_146}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d7/7f58/2dba7929bfff58dcf2d514a8d1f9ea3f"
                }}
                style={styles.ImageBackground_113_147}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8db2/a94f/55df8181851dd62bedb030210d5902bc"
                }}
                style={styles.ImageBackground_113_148}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_113_149}>
          <View style={styles.View_113_150}>
            <Text style={styles.Text_113_150}>Watch It Again</Text>
          </View>
          <View style={styles.View_113_151}>
            <View style={styles.View_113_152}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b34a/8393/4bd39f5c0847462644890ac788a1a6e9"
                }}
                style={styles.ImageBackground_113_153}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e54/fe2f/29502c5c4b88c652ee756bca28c74666"
                }}
                style={styles.ImageBackground_113_154}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90f6/8fad/848c4f9bf97096702a08a180cb9c7b8c"
                }}
                style={styles.ImageBackground_113_155}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43af/529f/232170b837f34a8040e36158d65c7635"
                }}
                style={styles.ImageBackground_113_156}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d076/47bb/0654ceb14b4b23290dc1fef77e521de2"
                }}
                style={styles.ImageBackground_113_157}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_113_158}>
          <View style={styles.View_113_159}>
            <Text style={styles.Text_113_159}>New Releases</Text>
          </View>
          <View style={styles.View_113_160}>
            <View style={styles.View_113_161}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dde5/7614/9a814d8198a10e7fafbd167c97a9d554"
                }}
                style={styles.ImageBackground_113_162}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3104/0b56/bbf2f9b082ce1061dadea0f423406f19"
                }}
                style={styles.ImageBackground_113_163}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e68/7f75/00ae602da59860aab1ae770d494cb789"
                }}
                style={styles.ImageBackground_113_164}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1339/6727/fbb57215a781b1808e5c0b10adf79332"
                }}
                style={styles.ImageBackground_113_165}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e24/16b9/ddc763719b2daf62d6453a18d83e14b1"
                }}
                style={styles.ImageBackground_113_166}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_113_167}>
          <View style={styles.View_113_168}>
            <Text style={styles.Text_113_168}>
              TV Thrillers &amp; Mysteries
            </Text>
          </View>
          <View style={styles.View_113_169}>
            <View style={styles.View_113_170}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3321/d511/af4e0806ae1501ae288a3fdaaec8ebfc"
                }}
                style={styles.ImageBackground_113_171}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fdd/4d41/6d78a7cbbf6b724573175b9107f26b31"
                }}
                style={styles.ImageBackground_113_172}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0293/fb71/a647b8a9845b956463321ac63eedd8b4"
                }}
                style={styles.ImageBackground_113_173}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/395d/ccd4/6ef2ced891f705a918af1732cfc15c1a"
                }}
                style={styles.ImageBackground_113_174}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eff/11d9/f75767fd8ab5ae2df0c95644a276994c"
                }}
                style={styles.ImageBackground_113_175}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_113_176}>
          <View style={styles.View_113_177}>
            <Text style={styles.Text_113_177}>US TV Shows</Text>
          </View>
          <View style={styles.View_113_178}>
            <View style={styles.View_113_179}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7802/1f6f/9048f7ec89bf016b6f2a2c9269ca3862"
                }}
                style={styles.ImageBackground_113_180}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d278/595a/d62fe1e0b184efc1d88026f71a29d258"
                }}
                style={styles.ImageBackground_113_181}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f465/0fdd/56af439a7042431af09cb5e5ae143444"
                }}
                style={styles.ImageBackground_113_182}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd48/33c3/4a5dd656edf1a6c5f07a4ab1d9e3a72c"
                }}
                style={styles.ImageBackground_113_183}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11ee/b679/60e9ec809a33a544603e8967863f238e"
                }}
                style={styles.ImageBackground_113_184}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_113_185}>
        <View style={styles.View_113_186}>
          <View style={styles.View_113_187}>
            <View style={styles.View_113_188}>
              <View style={styles.View_113_189}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2624/7e7f/86964f866e77f77c3ccabaece8159f5b"
                  }}
                  style={styles.ImageBackground_113_190}
                />
                <View style={styles.View_113_191}>
                  <View style={styles.View_113_192} />
                  <View style={styles.View_113_193}>
                    <View style={styles.View_113_194} />
                    <View style={styles.View_113_195}>
                      <View style={styles.View_113_196}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1446/9af6/b378939ec327b601b71baa9b783cb688"
                          }}
                          style={styles.ImageBackground_113_197}
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                        }}
                        style={styles.ImageBackground_113_201}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_113_203}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ae4/6943/528a53672130e66156e9e2d138e16506"
              }}
              style={styles.ImageBackground_113_204}
            />
            <View style={styles.View_113_205}>
              <View style={styles.View_113_206} />
              <View style={styles.View_113_207} />
              <View style={styles.View_113_208}>
                <View style={styles.View_113_209} />
                <View style={styles.View_113_210}>
                  <View style={styles.View_113_211}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1446/9af6/b378939ec327b601b71baa9b783cb688"
                      }}
                      style={styles.ImageBackground_113_212}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_113_216}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_113_218}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e68/08fb/99b79771df1180279983696d12334bc9"
              }}
              style={styles.ImageBackground_113_219}
            />
            <View style={styles.View_113_220}>
              <View style={styles.View_113_221} />
              <View style={styles.View_113_222}>
                <View style={styles.View_113_223} />
                <View style={styles.View_113_224}>
                  <View style={styles.View_113_225}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1446/9af6/b378939ec327b601b71baa9b783cb688"
                      }}
                      style={styles.ImageBackground_113_226}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_113_230}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_113_232}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eef/9427/b2fcb08cbf7cb59c542d294f54ed7548"
              }}
              style={styles.ImageBackground_113_233}
            />
            <View style={styles.View_113_234}>
              <View style={styles.View_113_235} />
              <View style={styles.View_113_236}>
                <View style={styles.View_113_237} />
                <View style={styles.View_113_238}>
                  <View style={styles.View_113_239}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1446/9af6/b378939ec327b601b71baa9b783cb688"
                      }}
                      style={styles.ImageBackground_113_240}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_113_244}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_113_246}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a55b/d410/9a90d41828537b06c222b9c8a1cf0015"
          }}
          style={styles.ImageBackground_113_247}
        />
      </View>
      <View style={styles.View_113_253}>
        <View style={styles.View_113_254}>
          <View style={styles.View_113_255} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_113_256}
          />
          <View style={styles.View_113_257} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
          }}
          style={styles.ImageBackground_113_258}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_113_262}
        />
        <View style={styles.View_113_267}>
          <View style={styles.View_113_268}>
            <Text style={styles.Text_113_268}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_113_269}>
        <View style={styles.View_113_270} />
        <View style={styles.View_113_271} />
      </View>
      <View style={styles.View_113_272}>
        <View style={styles.View_113_273} />
        <View style={styles.View_113_274}>
          <View style={styles.View_113_275}>
            <View style={styles.View_113_276}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33d5/bf2a/2135b370fc0433b1be2dcea5c7d624df"
                }}
                style={styles.ImageBackground_113_277}
              />
            </View>
            <View style={styles.View_113_280}>
              <Text style={styles.Text_113_280}>Search</Text>
            </View>
          </View>
          <View style={styles.View_113_281}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cee/f3d3/d170c48fa86240a9bd43e1fe6c5ecd3a"
              }}
              style={styles.ImageBackground_113_282}
            />
            <View style={styles.View_113_283}>
              <Text style={styles.Text_113_283}>Coming Soon</Text>
            </View>
          </View>
          <View style={styles.View_113_284}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f88/138a/c8b4fcf8bdf3d41bcc9ca77fef55ac64"
              }}
              style={styles.ImageBackground_113_285}
            />
            <View style={styles.View_113_286}>
              <Text style={styles.Text_113_286}>More</Text>
            </View>
          </View>
          <View style={styles.View_113_287}>
            <View style={styles.View_113_288}>
              <Text style={styles.Text_113_288}>Home</Text>
            </View>
            <View style={styles.View_113_289}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca06/4ce5/8042361330f656eb4e72a6609c82d9f4"
                }}
                style={styles.ImageBackground_113_290}
              />
            </View>
          </View>
          <View style={styles.View_113_296}>
            <View style={styles.View_113_297}>
              <Text style={styles.Text_113_297}>Downloads</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb7a/62b0/660fb6081af0f38f95109062c70546cb"
              }}
              style={styles.ImageBackground_113_298}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_113_300}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7071/7408/2f77d7edc9ec3a3404a44bc7083df27f"
          }}
          style={styles.ImageBackground_I113_300_6_497}
        />
        <View style={styles.View_I113_300_6_496}>
          <Text style={styles.Text_I113_300_6_496}>4</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_113_44: {
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
  ImageBackground_113_45: {
    width: wp("113.07902018229166%"),
    minWidth: wp("113.07902018229166%"),
    height: hp("56.69398907103825%"),
    minHeight: hp("56.69398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.539518229166667%"),
    top: hp("0%")
  },
  View_113_46: {
    width: wp("92.78300781249999%"),
    minWidth: wp("92.78300781249999%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("6.420765027322404%")
  },
  ImageBackground_113_47: {
    width: wp("14.133333333333335%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_113_57: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.4482421875%"),
    top: hp("1.6645504477245554%")
  },
  Text_113_57: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.196807861328125,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.7622978687286377,
    textTransform: "none"
  },
  View_113_58: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.022656250000004%"),
    top: hp("1.6645504477245554%")
  },
  Text_113_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.196807861328125,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.7622978687286377,
    textTransform: "none"
  },
  View_113_59: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.58300781250001%"),
    top: hp("1.6645504477245554%")
  },
  Text_113_59: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.196807861328125,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.7622978687286377,
    textTransform: "none"
  },
  View_113_60: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("70.49180327868852%")
  },
  Text_113_60: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21.74821662902832,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07339449226856232,
    textTransform: "none"
  },
  View_113_61: {
    width: wp("79.46666666666667%"),
    minWidth: wp("79.46666666666667%"),
    minHeight: hp("2.137027933297913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("94.12568306010928%")
  },
  Text_113_61: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_113_62: {
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
  View_113_63: {
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
  View_113_64: {
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
  ImageBackground_113_65: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%")
  },
  View_113_68: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448087%")
  },
  Text_113_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.64159107208252,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04079999774694443,
    textTransform: "none"
  },
  View_113_69: {
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
  View_113_70: {
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
  View_113_71: {
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
  ImageBackground_113_72: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  View_113_76: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666515%"),
    top: hp("3.415300546448087%")
  },
  Text_113_76: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.64159107208252,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04079999774694443,
    textTransform: "none"
  },
  View_113_77: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("54.23497267759563%")
  },
  Text_113_77: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.722997665405273,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.0410434752702713,
    textTransform: "none"
  },
  View_113_78: {
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
  View_113_79: {
    width: wp("10.4%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("0%")
  },
  Text_113_79: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16.462387084960938,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06119999662041664,
    textTransform: "none"
  },
  ImageBackground_113_80: {
    width: wp("4.8%"),
    height: hp("2.9508197242444982%"),
    minHeight: hp("2.9508197242444982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%")
  },
  View_113_81: {
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
  View_113_82: {
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
  View_113_83: {
    width: wp("2.2666666666666666%"),
    minWidth: wp("2.2666666666666666%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1333333333333293%"),
    top: hp("0.4781420765027349%")
  },
  Text_113_83: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5.861498832702637,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.02052173763513565,
    textTransform: "none"
  },
  View_113_84: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    minHeight: hp("0.9562840878637763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_113_84: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 3.3600001335144043,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.02052173763513565,
    textTransform: "none"
  },
  View_113_85: {
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
  View_113_86: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("126.50273224043715%")
  },
  View_113_87: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_113_87: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_113_88: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_89: {
    width: wp("144.79999999999998%"),
    minWidth: wp("144.79999999999998%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_90: {
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
  ImageBackground_113_91: {
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
  ImageBackground_113_92: {
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
  ImageBackground_113_93: {
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
  ImageBackground_113_94: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("117.33333333333333%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_113_95: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("305.7377049180328%"),
    minHeight: hp("305.7377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("155.60109289617486%")
  },
  View_113_96: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_97: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_113_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_113_98: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_99: {
    width: wp("144.79999999999998%"),
    minWidth: wp("144.79999999999998%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_100: {
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
  ImageBackground_113_101: {
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
  ImageBackground_113_102: {
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
  ImageBackground_113_103: {
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
  ImageBackground_113_104: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("117.33333333333333%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_113_105: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.098360655737707%")
  },
  View_113_106: {
    width: wp("57.86666666666667%"),
    minWidth: wp("57.86666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_113_106: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_113_107: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_108: {
    width: wp("144.79999999999998%"),
    minWidth: wp("144.79999999999998%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_109: {
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
  ImageBackground_113_110: {
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
  ImageBackground_113_111: {
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
  ImageBackground_113_112: {
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
  ImageBackground_113_113: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("117.33333333333333%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_113_114: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.19672131147544%")
  },
  View_113_115: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_113_115: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_113_116: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737679%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_117: {
    width: wp("144.79999999999998%"),
    minWidth: wp("144.79999999999998%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_118: {
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
  ImageBackground_113_119: {
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
  ImageBackground_113_120: {
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
  ImageBackground_113_121: {
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
  ImageBackground_113_122: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("117.33333333333333%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_113_123: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("87.29508196721312%")
  },
  View_113_124: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_113_124: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_113_125: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_126: {
    width: wp("144.79999999999998%"),
    minWidth: wp("144.79999999999998%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_127: {
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
  ImageBackground_113_128: {
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
  ImageBackground_113_129: {
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
  ImageBackground_113_130: {
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
  ImageBackground_113_131: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("117.33333333333333%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_113_132: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("38.3879781420765%"),
    minHeight: hp("38.3879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("145.4918032786885%")
  },
  View_113_133: {
    width: wp("43.51081949869792%"),
    minWidth: wp("43.51081949869792%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1450520833333329%"),
    top: hp("0%")
  },
  Text_113_133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_113_134: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("34.2896174863388%"),
    minHeight: hp("34.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737736%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_135: {
    width: wp("169.34388020833333%"),
    minWidth: wp("169.34388020833333%"),
    height: hp("34.2896174863388%"),
    minHeight: hp("34.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_136: {
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
  ImageBackground_113_137: {
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
  ImageBackground_113_138: {
    width: wp("41.07720947265625%"),
    minWidth: wp("41.07720947265625%"),
    height: hp("34.2896174863388%"),
    minHeight: hp("34.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128.26666666666668%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_113_139: {
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
  View_113_140: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("116.39344262295083%")
  },
  View_113_141: {
    width: wp("59.46666666666667%"),
    minWidth: wp("59.46666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_113_141: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_113_142: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737679%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_143: {
    width: wp("144.79999999999998%"),
    minWidth: wp("144.79999999999998%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_144: {
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
  ImageBackground_113_145: {
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
  ImageBackground_113_146: {
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
  ImageBackground_113_147: {
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
  ImageBackground_113_148: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("117.33333333333333%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_113_149: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("192.34972677595624%")
  },
  View_113_150: {
    width: wp("36.53333333333333%"),
    minWidth: wp("36.53333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_113_150: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_113_151: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.0983606557377925%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_152: {
    width: wp("144.79999999999998%"),
    minWidth: wp("144.79999999999998%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_153: {
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
  ImageBackground_113_154: {
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
  ImageBackground_113_155: {
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
  ImageBackground_113_156: {
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
  ImageBackground_113_157: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("117.33333333333333%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_113_158: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("221.44808743169403%")
  },
  View_113_159: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_113_159: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_113_160: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737679%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_161: {
    width: wp("144.79999999999998%"),
    minWidth: wp("144.79999999999998%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_162: {
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
  ImageBackground_113_163: {
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
  ImageBackground_113_164: {
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
  ImageBackground_113_165: {
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
  ImageBackground_113_166: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("117.33333333333333%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_113_167: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("250.54644808743166%")
  },
  View_113_168: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_113_168: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_113_169: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737736%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_170: {
    width: wp("144.79999999999998%"),
    minWidth: wp("144.79999999999998%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_171: {
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
  ImageBackground_113_172: {
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
  ImageBackground_113_173: {
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
  ImageBackground_113_174: {
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
  ImageBackground_113_175: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("117.33333333333333%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_113_176: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("279.6448087431694%")
  },
  View_113_177: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_113_177: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.92117691040039,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05740566551685333,
    textTransform: "none"
  },
  View_113_178: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737736%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_179: {
    width: wp("144.79999999999998%"),
    minWidth: wp("144.79999999999998%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_180: {
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
  ImageBackground_113_181: {
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
  ImageBackground_113_182: {
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
  ImageBackground_113_183: {
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
  ImageBackground_113_184: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("117.33333333333333%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_113_185: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("99.31693989071039%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_186: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_187: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_188: {
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
  View_113_189: {
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
  ImageBackground_113_190: {
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
  View_113_191: {
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
  View_113_192: {
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
  View_113_193: {
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
  View_113_194: {
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
  View_113_195: {
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
  View_113_196: {
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
  ImageBackground_113_197: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%")
  },
  ImageBackground_113_201: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%")
  },
  View_113_203: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("0%")
  },
  ImageBackground_113_204: {
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
  View_113_205: {
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
  View_113_206: {
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
  View_113_207: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 9, 20, 1)"
  },
  View_113_208: {
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
  View_113_209: {
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
  View_113_210: {
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
  View_113_211: {
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
  ImageBackground_113_212: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  ImageBackground_113_216: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666664%")
  },
  View_113_218: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("0%")
  },
  ImageBackground_113_219: {
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
  View_113_220: {
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
  View_113_221: {
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
  View_113_222: {
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
  View_113_223: {
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
  View_113_224: {
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
  View_113_225: {
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
  ImageBackground_113_226: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%")
  },
  ImageBackground_113_230: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666671%")
  },
  View_113_232: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%")
  },
  ImageBackground_113_233: {
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
  View_113_234: {
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
  View_113_235: {
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
  View_113_236: {
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
  View_113_237: {
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
  View_113_238: {
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
  View_113_239: {
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
  ImageBackground_113_240: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%")
  },
  ImageBackground_113_244: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666671%")
  },
  View_113_246: {
    width: wp("96.8%"),
    minWidth: wp("96.8%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("76.36612021857924%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_113_247: {
    width: wp("143.46666666666667%"),
    minWidth: wp("143.46666666666667%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_253: {
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
  View_113_254: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.367943101893357%")
  },
  View_113_255: {
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
  ImageBackground_113_256: {
    width: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009093571230361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%")
  },
  View_113_257: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.2732240437158473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_113_258: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_113_262: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413477663133965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_113_267: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_268: {
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475409%")
  },
  Text_113_268: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_113_269: {
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
  View_113_270: {
    width: wp("100%"),
    height: hp("4.33099699802086%"),
    top: hp("-0.12373793971995894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_113_271: {
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
  View_113_272: {
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
  View_113_273: {
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
  View_113_274: {
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
  View_113_275: {
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
  View_113_276: {
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
  ImageBackground_113_277: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%")
  },
  View_113_280: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%")
  },
  Text_113_280: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_113_281: {
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
  ImageBackground_113_282: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("0%")
  },
  View_113_283: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%")
  },
  Text_113_283: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_113_284: {
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
  ImageBackground_113_285: {
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
  View_113_286: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666515%"),
    top: hp("1.5027322404371546%")
  },
  Text_113_286: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_113_287: {
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
  View_113_288: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%")
  },
  Text_113_288: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_113_289: {
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
  ImageBackground_113_290: {
    width: wp("5.333333333333334%"),
    height: hp("2.3224043715846996%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.533333333333335%")
  },
  View_113_296: {
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
  View_113_297: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%")
  },
  Text_113_297: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  ImageBackground_113_298: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%")
  },
  View_113_300: {
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
  ImageBackground_I113_300_6_497: {
    flexGrow: 1,
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I113_300_6_496: {
    flexGrow: 1,
    width: wp("1.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333385%"),
    top: hp("0.6830601092896273%")
  },
  Text_I113_300_6_496: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
