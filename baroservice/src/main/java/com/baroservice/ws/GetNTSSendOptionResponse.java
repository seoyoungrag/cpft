
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
 *         &lt;element name="GetNTSSendOptionResult" type="{http://ws.baroservice.com/}NTSSendOption" minOccurs="0"/&gt;
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
    "getNTSSendOptionResult"
})
@XmlRootElement(name = "GetNTSSendOptionResponse")
public class GetNTSSendOptionResponse {

    @XmlElement(name = "GetNTSSendOptionResult")
    protected NTSSendOption getNTSSendOptionResult;

    /**
     * getNTSSendOptionResult 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link NTSSendOption }
     *     
     */
    public NTSSendOption getGetNTSSendOptionResult() {
        return getNTSSendOptionResult;
    }

    /**
     * getNTSSendOptionResult 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link NTSSendOption }
     *     
     */
    public void setGetNTSSendOptionResult(NTSSendOption value) {
        this.getNTSSendOptionResult = value;
    }

}
