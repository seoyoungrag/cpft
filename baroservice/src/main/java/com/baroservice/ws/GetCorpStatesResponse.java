
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type에 대한 Java 클래스입니다.
 * 
 * <p>다음 스키마 단편이 이 클래스에 포함되는 필요한 콘텐츠를 지정합니다.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="GetCorpStatesResult" type="{http://ws.baroservice.com/}ArrayOfCorpState" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "getCorpStatesResult"
})
@XmlRootElement(name = "GetCorpStatesResponse")
public class GetCorpStatesResponse {

    @XmlElement(name = "GetCorpStatesResult")
    protected ArrayOfCorpState getCorpStatesResult;

    /**
     * getCorpStatesResult 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfCorpState }
     *     
     */
    public ArrayOfCorpState getGetCorpStatesResult() {
        return getCorpStatesResult;
    }

    /**
     * getCorpStatesResult 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfCorpState }
     *     
     */
    public void setGetCorpStatesResult(ArrayOfCorpState value) {
        this.getCorpStatesResult = value;
    }

}
